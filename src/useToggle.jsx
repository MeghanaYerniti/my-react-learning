import { useState } from "react";

const useToggle = (defValue) => {
  const [value, setValue] = useState(defValue);

  function toggleValue(val) {
    if (typeof val != "boolean") {
      setValue(!value); // getting default value from App.jsx
    } else {
      setValue(val);
    }
  }
  return [value, toggleValue]; // can use vale and toggle value when imported
};

export default useToggle;
