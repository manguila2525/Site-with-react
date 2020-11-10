import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = ({ addUser }) => {

  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data, e) => {
    console.log(data);
    addUser(data)
    e.target.reset()
  }

  return (
    <form className="grid gap-4 px-5 my-5" onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          className="
            border 
            rounded 
            py-2 pl-2 
            w-full"
          ref={
            register({
              required: { value: true, message: "This is required" }
            })
          }
        />
        <span className="bold text-red-500" >
          {errors?.name?.message}
        </span>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          className="
            border 
            rounded 
            py-2 pl-2 
            w-full"
          ref={
            register({
              required: { value: true, message: "This is required" }
            })
          }
        />
        <span className="bold text-red-500" >
          {errors?.username?.message}
        </span>
      </div>
      <button className="px-3 py-2 rounded bg-green-500" >Add user</button>
    </form>
  );
}

export default AddUserForm;
