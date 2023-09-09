import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();


    const login = {
      email: data.email,
      password: data.password,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/user/login`,
        login,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        const { success, message } = res.data;
        const test =res
        console.log(test)
        if(success){
          reset();
          setTimeout(() =>{
            navigateTo('/Recipe_app');
          }, 1000);
          
        } else {
          alert(message);
        };
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };


  return (
    <section>
      <h2>Login</h2>
      <form
        className='createRecipeForm'
        onSubmit={(e) => handleSubmit(onSubmit)(e)}
      >

        <div>
          <label>Email</label>
          <input
            name='email'
            type='email'
            {...register("email", { required: "An email is required!" })}
          />
          <small className='text-danger'>
            {errors?.email && errors.email.message}
          </small>
        </div>

        <div>
          <label>Password</label>
          <input
            name='password'
            type='password'
            {...register("password", { required: "A Password is required!" })}
          />
          <small className='text-danger'>
            {errors?.password && errors.password.message}
          </small>
        </div>
    
        <button className='btn' type='submit'>
          Submit
        </button>
        <span>
           Don't have an account? <Link to={"/Recipe_app/signup"}>SignUp</Link>
        </span>
      </form>
    </section>
  );
}

export default Login;