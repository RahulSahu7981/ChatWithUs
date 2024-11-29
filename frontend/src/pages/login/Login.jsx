import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {loading, login} = useLogin()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await login(username, password)
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center'>Login <span className='text-blue-400'>ChatBook</span></h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label pt-6'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' className='w-full input input-bordered h-10' />
                </div>

                <Link to={"/signup"} className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>{"Don't"} have an account </Link>
                
                <div>
                    <button className='btn btn-block btn-sm mt-6' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>
            </form>
        </div>



    </div>
  )
}

export default Login