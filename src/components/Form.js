import React,{useState} from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    const [message,setMessage]=useState("");

    function handleClick(){
        setMessage("Your Boooking has been registered");


    }
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h1  >Book Your Courses</h1>
                <span>Book and enjoy the Learning</span>
                <p className="para" style={{color: "green"}}> {message} </p>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Enter Your Name' />
                    <select placeholder='Select Course'>
                       <option selected value="Select course">Select a Course</option>
                       <option value="Grade 1">Introduction to Coding</option>
                       <option value="Grade 2">Learn App Development</option>
                       <option value="Grade 3">Learn ML and AI</option>
                    </select>
                    <input type="date" {...register("date")} placeholder='Select Date' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Enter Mobile Number' />
                    <button onClick={handleClick} className='btn'>Schedule a Free Class</button>
                </form>

            </div>
            <div className="col-2">
                <img src={"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2560/https://yetiacademy.com/wp-content/uploads/2020/09/5-Fantastic-Coding-Games-For-Students-scaled.jpeg"} alt="" />
            </div>
        </div>
    </section>
  )
}