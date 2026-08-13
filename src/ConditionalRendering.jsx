import {useState} from "react";

function App() {
    const [btn, setBtn] = useState(false);
    const [todo, setTodo] = useState([
        {id: 1, title: "Learn React"},
        {id: 2, title: "Learn Redux"},
        {id: 3, title: "Learn React Router"},
    ]);

    const Todo = ({todo}) => {
        return (
            <>
            <div>
                <p className="todo">{todo.id}</p>
                <p className="todo">{todo.title}</p>
            </div>
            </>
        )
    }

    return (
        <>
            {/* {btn? <button> Button</button> : ""} */}
            <br/>
            {
                btn && <button>Button</button>
            }
            <br/>
            <button onClick={() => setBtn(!btn)}>Show/Hide Todos</button> {/* toggle button to show and hide the todos */}

            {btn && todo.map((todo) => {
                return (<Todo key={todo.id} todo={todo}/>)
            })}
        </>
    )
}

export default App;