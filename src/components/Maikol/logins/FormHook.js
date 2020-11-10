import React from 'react';
//Paquete para validar el formulario REACT-HOOK-FORM
import { useForm } from "react-hook-form";

const FormHook = () => {

  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset()
  }

  return (
    <div>
      <h1>Formulario</h1>
      <span className="text-red-500 uppercase">
        {errors.username && errors.username.message}
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="username" placeholder="Username" ref={
          register({
            required: { value: true, message: "Titulo obligatorio" }
          })
        } />

        <button type="submit" >Enviar</button>
      </form>
    </div>
  );
}

export default FormHook;
