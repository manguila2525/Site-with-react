import React, { useState } from 'react';


const Form2 = () => {

  const [datos, setDatos] = useState({
    username: "",
    password: ""
  });

  const [show, setShow] = useState("");

  const handleInputUsername = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const handleInputPassword = e => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const handleButtonLogin = (e) => {
    e.preventDefault()
    if (datos.username === "manguila2525" && datos.password === "anguila2525") {
      setShow("Correcto!!!")
    } else {
      setShow("Incorrecto!!!")
    }
  }

  return (
    <div className="grid grid-cols-6">
      <form onSubmit={handleButtonLogin} className="border grid col-span-6 sm:col-span-2 sm:col-start-3 gap-2 px-5 py-5" >
        <div>
          <input type="text" onChange={handleInputUsername} placeholder="Username" name="username" className="w-full rounded border px-3 py-2" />
        </div>
        <div>
          <input type="password" onChange={handleInputPassword} placeholder="Password" name="password" className="w-full rounded border px-3 py-2" />
        </div>
        <div>
          <button type="submit" className="w-full">Login</button>
        </div>
      </form>
      {show}
    </div>
  );
}

export default Form2;
