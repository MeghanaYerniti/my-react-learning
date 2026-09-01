import { useState, useEffect } from "react";
import getData from "./component/data.jsx";

function App() {
    // const[data, setData] = useState(null);

    useEffect(() => {
        getData().then((data) => {
            console.log(data);
            // setData(data);
        });
    }, []);

    return(
        <>
        </>
    )
}

export default App;