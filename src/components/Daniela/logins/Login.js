import React from 'react'

export default function Login() {
    return (
        <div className="container mx-auto my-2 grid grid-cols-6">
            <div className="shadow px-5 text-center py-3 col-start-1 col-span-6 sm:col-span-2 sm:col-start-3 grid grid-rows-3 gap-2 grid-cols-6 border rounded">
                <div className="bg-green-400 col-start-1 col-span-6">
                    <h1 className="text-base text-sm text-white py-3">Login</h1>
                </div>
                <button className="border col-span-3 rounded shadow-xl hover:bg-red-600 hover:border-red-900">Sign Up</button> 
                <button className="border col-span-3 py-2 rounded shadow-xl hover:bg-red-600 hover:border-red-900">Sign In</button> 
                <button className="border col-span-4 col-start-2 px-3 py-2 mb-5 rounded shadow-xl hover:bg-red-600 hover:border-red-900">Create account</button> 
                <a className="text-base sm:text-sm text-center col-start-1 col-span-6">Remember your password</a>
            </div>
        </div>
    )
}
