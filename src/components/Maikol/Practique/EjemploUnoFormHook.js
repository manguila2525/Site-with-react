import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EjemploUnoFormHook = () => {

  const { register, errors, handleSubmit } = useForm()

  const [Entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    setEntradas(Entradas.concat(data))
    e.target.reset()
  }

  return (
    <div>
      <h1>Ejemplo 1</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid " >
        <div>
          <input type="text" name="username" className="w-full" placeholder="Username" ref={
            register({
              required: { value: true, message: "Ingrese algun valor en Username" },
              minLength: { value: 2, message: "Minimo dos requisitos" }
            })
          }
          />
          <h1 className="text-red-500">{errors.username && errors.username.message}</h1>
        </div>
        <div>
          <input type="text" name="description" placeholder="Description" ref={
            register({
              required: { value: true, message: "Ingrese algun valor en Description" },
              minLength: { value: 2, message: "Minimo dos requisitos" }
            })
          } />
          <h1 className="text-red-500">{errors.description && errors.description.message}</h1>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {Entradas.map(item => <li> {item.username}-{item.description} </li>)}
      </ul>

    </div>
  );
}

export default EjemploUnoFormHook;
