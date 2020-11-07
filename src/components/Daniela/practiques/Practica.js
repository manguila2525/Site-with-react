import React, {useState} from 'react'



const Practica = () => {

    const [nombre, setNombre] = useState("Daniela")

    const [numero, setNumero] = useState(5)

    const [estado, setEstado] = useState(true)

    const [perritos, setPerritos] = useState(["Coby", "Ramon", "Rafaela"])

    const editar = () => {
        setNombre("Pedro")
    }

    const mostrar = () => {
        setEstado(!estado)

    }

    const aumentar = () => {
        setNumero (numero + 1);
    }

    const disminuir = () => {
        setNumero(numero - 1)
    }


    return (
        <div className="container mx-auto ">

        <button className="border rounded bg-teal-500 px-4 py-2 " onClick={mostrar}>{estado == true ? "Ocultar" : "Mostrar"}</button>
        { 
            estado ? 
            <div className="grid grid-cols-2 gap-4"> 
            <div className="bg-red-300 ">
                <h1 className="text-center uppercase"> {nombre} </h1>
                <button className="border w-full rounded bg-green-400 px-4 py-2 mt-5" onClick={editar}>Editar</button>
            </div>
            <div className="bg-blue-300 grid grid-cols-2 ">
                <h1 className="text-center uppercase col-span-2">Contador: { numero > 0 ? numero : "No hay numeros" }</h1>
                <button className="border rounded bg-blue-400 px-4 py-2 mx-3 my-3" onClick={aumentar}>Aumenta</button>
                <button className="border rounded bg-orange-400 px-4 py-2 mx-3 my-3" onClick={disminuir}>Disminuye</button>
            </div>
            </div>
            : "no se muestra nada"
        }
        {
            perritos.map((perrito, index) => <h1 key={index} > {index}-{perrito}</h1> )
        }
        </div>
    )
}

export default Practica;

// import React, { Component } from 'react'

// export default class Practica extends Component {

//     state= {
//         nombre: "Da"
//     }

//     editar(){
//         this.setState({
//             nombre: "Daniela"
//         })
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.nombre}
//                 <button onClick={this.editar}>editar</button>
//             </div>
//         )
//     }
// }
