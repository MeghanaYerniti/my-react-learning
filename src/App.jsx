import React from "react";
import { useState, useEffect } from "react";
import getData from "./component/data.jsx";
import Postcard from "./component/postcard.jsx";

function App() {
    const[data, setData] = useState(null);

    useEffect(() => {
        getData().then((data) => {
            console.log("data at App:", data.id);
            setData(data);
        });
    }, []);

    return(
        <>
        {
            data ? data.map((item) => (
                // <Postcard key={item.id} title={item.title} body={item.body} /> 
                // here we can't send the key as props and access it in child. We have to send as anothe prop as below.
                <Postcard key={item.id} id={item.id} title={item.title} body={item.body} />
            )) : null
        }
        </>
    )
}

export default App;