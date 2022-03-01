import React from "react";
import './search.style.css'

export const SearchBox=({placeholder, handleChange})=>{
    return (
        <input className="search-box"
        type='text' 
        placeholder={placeholder} 
        onChange={handleChange}>
        </input>
    )
}