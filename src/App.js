import {React, Component} from 'react';
import './App.css';
import  CardList  from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      users:[],
      searchField:''
    }
  }

  /*State передается как значение для props в компонент: props={state} */

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(items => this.setState({users: items}))
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }
  //чтобы react понял контекст, когда создаем метод, в constructor делаем привязку через bind
  //this.handleChange - это свойство в конструкторе класса
  //this.handleChange.bind(this) - это привязка контекста конструктора к методу
  // но если записать метод handleChange(e){} в виде функции handleChange = (e) => {}, то привязка не нужна!!
  // функция сама определяет контекст той области, где она вызвана {наша функция в блоке App компонента}

  render(){
    const {users, searchField} = this.state;
    const fiteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Пользователи</h1>
        <SearchBox 
        placeholder='Искать пользователей...'
        handleChange={this.handleChange}
        />
        <CardList users={fiteredUsers}/>
      </div>
      //чтобы setState сработал сразу, вторым агрументом передаем колбэк
      // onChange после ввода в строку символов перезапускает метод render() и отрисовка по новой
    )
  }
}

export default App;
