import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
// import Component1 from './component/Componnet1.jsx'
// import C1Child from './component/C1Child.jsx'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Megha"); // using default values 

  const [form, setForm] = useState({
    email: "",
    phone: "",
  });

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const changeOnClick = () => {
    alert("You clicked a button!");
  };

  const changeOnMouseOver = () => {
    // alert("You hovered over the div!");
  };

  return (
    <>
      <div>
        <button onClick={changeOnClick} className="clickMe">
          Click Me
        </button>

        <div className="overMe" onMouseOver={changeOnMouseOver}></div>

        <input type="text" name="name" value={name} onChange={handleChange} /><br />

        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChangeForm}
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChangeForm}
        />
      </div>
    </>
  );
}

export default App;
