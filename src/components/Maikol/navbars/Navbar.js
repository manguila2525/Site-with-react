import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="bg-black grid grid-cols-6 gap-3 py-2 px-5 sm:px-20">
        <p className="text-base sm:col-span-3 d-none sm:d-block sm:text-xl bg-white text-center pt-1 rounded">Logo</p>
        <input type="text" placeholder="User Name" className="pl-2 rounded" />
        <input type="password" placeholder="Password" className="pl-2  rounded" />
          <button
            className="
              bg-blue-500 
              sm:bg-orange-400
              md:bg-red-500
              rounded border 
              border-blue-500 
              text-white 
              text-center
              hover:bg-blue-700 
              font-bold
              sm:px-4
              sm:py-2
              px-1 py-2">
                  Signin
          </button>
</div>
    )
  }
}
