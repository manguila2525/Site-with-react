import React from 'react'

export default function Login2() {
    return (
        <div className="grid grid-cols-12 bg-green-400 py-8">
            <div className="bg-white grid grid-cols-6 col-span-4 col-start-5 gap-4 py-8">
            <div className="col-span-4 col-start-2">
            <input type="text" placeholder="Username" className="text-sm pl-2 py-1 border w-full bg-gray-300"></input>
            </div>
            <div className="col-span-4 col-start-2">
            <input type="password" placeholder="Password" className="pl-2 text-sm border bg-gray-300 w-full py-1"></input>
            </div>
            <div className="col-span-4 col-start-2">
            <button className="bg-green-400 w-full text-center py-2 text-xs text-white">LOGIN</button>
            </div>
            <div className="col-span-4 grid grid-cols-1 col-start-2">
               <h1 className="text-xs text-center">Not registered? <a className="text-xs text-center hover:text-green-400" href="#">Create an account</a></h1>
            </div>
         

            </div>
        </div>
    )
}
