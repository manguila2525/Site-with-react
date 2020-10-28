import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="bg-gray-100 px-10 py-2">

        <button
          className="
            bg-blue-500 
            sm:bg-orange-400
            md:bg-red-500
            rounded border 
            border-blue-500 
            text-white 
            hover:bg-blue-700 
            font-bold
            px-4 py-2">
          Signin
        </button>
      </div>
    )
  }
}
