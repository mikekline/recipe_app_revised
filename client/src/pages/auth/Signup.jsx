import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUp = () => {
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();


    const newUser = {
      email: data.email,
      username: data.username,
      password: data.password,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/user/register`,
        newUser,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        const { success, message } = res.data;
        if(success){
          reset();
          alert(message);
          navigateTo('/Recipe_app/login');
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
      <h2>Register</h2>
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
          <label>Username</label>
          <input
            name='username'
            type='text'
            {...register("username", { required: "A Username is requiredI" })}
          />
          <small className='text-danger'>
            {errors?.username && errors.username.message}
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
           Already have an account? <Link to={"/Recipe_app/login"}>Login</Link>
        </span>
      </form>
    </section>
  );
}

export default SignUp