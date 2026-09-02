import React from "react";

function Postcard({id, title, body }) {
    console.log("data at postcard:", id);
    return(
        <>
            <p>id: {id}</p>
            <h1>title: {title}</h1>
            <p>body: {body}</p>
        </>
    )
}

export default Postcard;