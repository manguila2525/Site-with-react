import React, {useState, Fragment} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState(0)

    const [players, setPlayers] = useState([
        {
            name:"Juan", age:21
        },
        {
            name:"Erika", age:23
        },
        {
            name:"David", age:28
        },
])

    const [show, setShow] = useState(false);

    const aumentar = () => {
        console.log("me diste onClick");
        setNumero(numero + 1)
    }

    const disminuir = () => {
        setNumero(numero - 1)
    }

    const addPlayer = () => {
        setPlayers(players.concat({name:"new", age: 88}))
    }

    const showFunction = () => {
        setShow(!show)
    }

    return (
        <div className="container mx-auto">
            <h1>Contador: {numero} </h1>
            <button 
                className="
                    bg-green-600 
                    px-3 py-2 
                    text-white 
                    rounded
                    mr-2" 
                onClick={aumentar}>
                    Aumentar
            </button>
            <button 
                onClick={disminuir}
                className="
                    text-gray-700
                    px-3 py-2">
                    Disminuir
            </button>
            <button 
                className="
                    bg-blue-600 
                    px-3 py-2 
                    text-white 
                    rounded
                    mr-2" 
                onClick={addPlayer}>
                    Agregar
            </button>
            <button 
                className="
                    bg-red-600 
                    px-3 py-2 
                    text-white 
                    rounded
                    mr-2" 
                onClick={showFunction}>
                    {show ? "Hidden" : "Show"}
            </button>
            {
                show ? 
                players.map((player, item) => (
                    <div key={item}>
                        <h1>Nombre: {player.name}</h1>
                        <h2>Edad: {player.age}</h2>
                        <input type="text" />
                    </div>
                )) : "No hay nada"
            }
        </div>
    )
}

export default Contador;