import React, { Component } from 'react'

export default class Practica1 extends Component {
    render() {
        return (
            <div className="
                container 
                mx-auto
                hover:border-red-200 
                mt-10
                p-5 
                rounded border">
                <p className="text-gray-700 text-base sm:text-4xl text-center" >
                lorem ipsum aoijnfgoqnewvqoewfig wcuam im
                 xuraouehoem fuam oaicmofae
                 </p>

            <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-400">A</div>
                <div className="bg-green-400">B</div>
                <div className="bg-green-400">A</div>
            </div>
                 
            <div className="grid grid-cols-12 mt-5 gap-4">
                <div className="bg-green-400">A</div>
                <div className="bg-green-400">B</div>
                <div className="bg-green-400">A</div>
                <div className="bg-green-400">A</div>
                <div className="bg-green-400">B</div>
                <div className="bg-green-400">A</div>
                <div className="bg-green-400">A</div>
                <div className="bg-green-400">B</div>
                <div className="bg-green-400">A</div>
                <div className="bg-green-400">A</div>
                <div className="bg-green-400">B</div>
                <div className="bg-green-400">A</div>
            </div>
            <div className="grid grid-cols-3 mt-5 gap-4">
                <div className="bg-green-400 col-start-2 ">A</div>
                <div className="bg-green-400 ">B</div>
                <div className="bg-green-400 ">A</div>
            </div>
            <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-4 sm:grid-rows-2 mt-5 gap-4">
               
                    <div className="bg-green-400 ">A</div>
                    <div className="bg-green-400 ">B</div>
                    <div className="bg-green-400 col-span-1 row-span-2 sm:row-span-2 sm:col-span-2 ">C</div>
                    <div className="bg-green-400 ">D</div>
                    <div className="bg-green-400 ">E</div>
               
            </div>
            </div>
        )
    }
}
