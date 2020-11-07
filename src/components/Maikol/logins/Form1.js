import React, { Component } from 'react'

export default class Form1 extends Component {
    render() {
        return (
            <div className="container mx-auto sm:mx-10">
                <form className="grid grid-cols-3 gap-4 border bg-orange-400 py-10 px-2 sm:px-2 ">
                    <h1 className="sm:text-2xl col-start-2 text-center text-base">Login</h1>
                   <input type="text" placeholder="Write here!" className="px-3 py-2 rounded border border-blue-400 col-span-3 sm:col-start-2 sm:col-span-1" /> 
                   <input type="text" placeholder="Write here!" className=" col-span-3 sm:col-start-2 sm:col-span-1" /> 
                   <input type="text" placeholder="Write here!" className=" col-span-3 sm:col-start-2 sm:col-span-1" /> 
                   <input type="text" placeholder="Write here!" className=" col-span-3 sm:col-start-2 sm:col-span-1" /> 
                   <input type="text" placeholder="Write here!" className=" col-span-3 sm:col-start-2 sm:col-span-1" /> 
                   <input type="text" placeholder="Write here!" className=" col-span-3 sm:col-start-2 sm:col-span-1" /> 
                   <input type="text" placeholder="Write here!" className=" col-span-3 sm:col-start-2 sm:col-span-1" /> 
                   <input type="text" placeholder="Write here!" className=" col-span-3 sm:col-start-2 sm:col-span-1" /> 
                   <input type="text" placeholder="Write here!" className=" col-span-3 sm:col-start-2 sm:col-span-1" />
            
             
                </form>
            </div>
        )
    }
}
