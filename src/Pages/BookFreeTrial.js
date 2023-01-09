import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./BookFreeTrial.css";

function BookFreeTrial() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Book Trial Class Now</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("username", { required: "Username is required" })}
            />
          </div>
          <p>{errors.username?.message}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <p>{errors.email?.message}</p>
          <div className="field">
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="Mobile Number"
              {...register("mobilenumber", {
                required: "Mobile Number is Required",
              })}
            />
          </div>
          <p>{errors.mobilenumber?.message}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BookFreeTrial;
