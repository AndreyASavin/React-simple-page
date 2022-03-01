import React from "react";
import "./card-list.styles.css";
import { Card } from "../card-item/card.component";

const CardList = (props) =>{
    return (
        <div className="card-list">
            {props.users.map(user=>(
                <Card key={user.id} user={user}/>
            ))}
        </div>
    )
}
// props - это объект, а users - это свойство объекта, переданное из родительского.
// в дочерний передача идет аналогично

export default CardList