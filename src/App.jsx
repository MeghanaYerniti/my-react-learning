import { useState, useEffect } from 'react';
import getData from './component/data.jsx';

function App() {

    const [data, setData] = useState(null);

    useEffect(() => {
        getData().then((data) => {
            setData(data);
        });
    }, []);

    console.log(data);

    return (
        <>
            {/* <ul> */}
                {
                    data ? data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    )) : null
                }
            {/* </ul> */}
        </>
    )
}

export default App;