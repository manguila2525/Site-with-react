import React, { useState } from 'react';



const Practica2 = () => {

  const [nombre, setNombre] = useState("Daniela")

  const [numero, setNumero] = useState(5)

  const [estado, setEstado] = useState(true)

  const [perro, setPerro] = useState(["angel", "ivan", "maikol"])

  const editar = () => {
    setNombre("Juan")
  }

  const aumentar = () => {
    setNumero(numero + 1)
  }

  const disminuir = () => {
    setNumero(numero - 1)
  }

  const mostrar = () => {
    setEstado(!estado)
  }

  return (
    <div>
      <button onClick={mostrar}> {estado == true ? "Ocultar" : "Mostrar"}</button>
      {
        estado ?

          <div>
            <h1>{nombre}</h1>
            <button onClick={editar}>Editar</button>
            <h1>Contador: {numero > 0 ? numero : "no hay numero"} </h1>
            <button onClick={aumentar}>Aumentar</button>


            <button onClick={disminuir}>Disminuir</button>
          </div>
          : "no se muestra nada"
      }
      {
        perro.map((perrito, index) => <h1 key={index} > {index}-{perrito}</h1>)
      }
    </div>
  );
}

export default Practica2;
