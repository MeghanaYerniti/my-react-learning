import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/*  displaying generic error message */}
          <input placeholder="username" {...register("username", {required: true, minLength: 3, maxLength: 8})} type="text"/>
          {errors.username && <div>Error in username</div>}
          <br />
           {/* specific error message */}
          <input placeholder="password" {...register("password", {required: {value: true, message: "Password is required"}, minLength: {value: 6, message: "Min length is 6"}, maxLength: {value: 12, message: "Min length is 12"}})}/><br />
          {errors.password && <div>{errors.password.message}</div>}
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App; 
