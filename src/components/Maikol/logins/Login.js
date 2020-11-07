import React from 'react'


const validation = (r) => {
    console.log(r.target)
    console.log("Validado")
}

const Login = () => (
    <div className="grid grid-cols-9 mt-5">
        <form onSubmit={(r)=>validation(r)} className=" rounded shadow-md px-3 py-4 col-start-1 gap-2 col-span-9 sm:col-start-5 sm:col-span-2 grid grid-cols-1">
            
            <h1 className="text-center text-xl4">Mr.Shadow</h1>

            <div>
                <input type="text" placeholder="Username" className="w-full border py-1 rounded pl-3 text-sm" />
            </div>
            <div>
                <input type="password" placeholder="Password"  className="w-full py-1 border rounded pl-3 text-sm" />
            </div>
            <div>
                <button type="submit"   className="w-full border py-1 rounded pl-3">Login</button>
            </div>
        </form>
    </div>
)

export default Login;