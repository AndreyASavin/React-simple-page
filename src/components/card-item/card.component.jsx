import React from "react";
import "./card.styles.css"

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="user" src={`https://robohash.org/${props.user.id}?set=set2`}></img>
            <h3>{props.user.name}</h3>
            <p>{props.user.email}</p>
        </div>
    )
}