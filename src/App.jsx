import React from "react";
import { useState, useEffect } from "react";
import getData from "./component/data.jsx";

function App() {
    const[data, setData] = useState(null);

    useEffect(() => {
        getData().then((data) => {
            console.log(data);
            setData(data);
        });
    }, []);

    return(
        <>
        {
            data ? data.map((item) => {
                <li>{item.title}</li>
            }) : null
        }
        </>
    )
}

export default App;