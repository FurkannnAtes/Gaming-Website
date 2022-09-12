import React from 'react'
import { Link } from 'react-router-dom'
import Connect from '../components/connect/Connect'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const Register = () => {
    return (
        <div className="overflow-x-hidden  overflow-y-visible bg-[rgb(14,1,49)] ">
            <Navbar />
            <div className='bg-[url("https://bonx-react.pages.dev/static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")] h-[420px] flex flex-col justify-center items-center text-white gap-10'>
                <h1 className='text-3xl xl:text-7xl creepster-font' style={{ textShadow: "3px 3px rgb(177,84,240)" }}>Register</h1>
                <h2>   <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>HOME</span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>     / </span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>Register</span> </h2>
            </div>
            <div className='flex flex-col px-5 py-20 mx-auto lg:px-20 lg:flex-row'>
                <img className='max-h-[500px] w-full mx-auto mb-5 lg:mb-0 max-w-[500px]' src="https://bonx-react.pages.dev/static/4f45ddc87f485e0d352ef56388138e15/c5263/login-thumb.webp" alt="" />
                <div className='flex flex-col justify-center w-full gap-5 text-white lg:px-20'>
                    <h1 className='text-5xl font-extrabold text-center'>Register</h1>
                    <form className='flex flex-col w-full gap-5 text-white '>
                        <input className=' focus:border-[rgb(177,84,204)] hover:border-[rgb(177,84,204)] duration-300 h-[60px] outline-none bg-[rgb(9,0,42)] placeholder:text-gray-300 border-[rgb(66,58,95)] border-2 rounded-lg pl-2' type="text" placeholder='Name' />
                        <input className=' focus:border-[rgb(177,84,204)] hover:border-[rgb(177,84,204)] duration-300 h-[60px] outline-none bg-[rgb(9,0,42)] placeholder:text-gray-300 border-[rgb(66,58,95)] border-2 rounded-lg pl-2' type="email" placeholder='E-mail' />
                        <input className=' focus:border-[rgb(177,84,204)] hover:border-[rgb(177,84,204)] duration-300 h-[60px] outline-none bg-[rgb(9,0,42)] placeholder:text-gray-300 border-[rgb(66,58,95)] border-2 rounded-lg pl-2' type="password" placeholder='password' />
                        <input className=' focus:border-[rgb(177,84,204)] hover:border-[rgb(177,84,204)] duration-300 h-[60px] outline-none bg-[rgb(9,0,42)] placeholder:text-gray-300 border-[rgb(66,58,95)] border-2 rounded-lg pl-2' type="password" placeholder='Retype password' />
                        <button className='flex items-center gap-2 w-[200px] h-[60px] text-xl font-extrabold justify-center mx-auto rounded-xl duration-300 hover:gap-3 bg-[rgb(177,84,204)]' type='submit'><span>Register</span> <span> <i className="bi bi-arrow-right-short 2xl"></i></span></button>
                        <p className='text-center'>Already have account, <Link to="/login" className='font-extrabold text-yellow-300'> Login here</Link></p>
                    </form>

                </div>
            </div>
            <Connect />
            <Footer />
        </div>
    )
}

export default Register
