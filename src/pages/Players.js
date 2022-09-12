import React from 'react'
import Connect from '../components/connect/Connect'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Players = () => {

    return (
        <div className="overflow-x-hidden  overflow-y-visible bg-[rgb(14,1,49)] ">
            <Navbar />
            <div className='bg-[url("https://bonx-react.pages.dev/static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")] h-[420px] flex flex-col justify-center items-center text-white gap-10'>
                <h1 className='text-3xl xl:text-7xl creepster-font' style={{ textShadow: "3px 3px rgb(177,84,240)" }}>PLAYERS</h1>
                <h2>   <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>HOME</span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>     / </span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>PLAYERS</span> </h2>
            </div>
            <div className='grid grid-cols-1 gap-5 py-2 md:grid-cols-2 xl:grid-cols-3 lg:px-20'>
                <Link to="/details/THUNDERMAN"> <div className='max-w-[400px]  mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5'>
                    <img className="rounded-xl" src="https://bonx-react.pages.dev/static/89eb02cc445e8ee55c3b7172ac430fca/f3d8d/player-1.webp" alt="" />
                    <h1>THUNDERMAN</h1>
                    <h1 className="text-lg">36 LEVEL COMPLETED</h1>
                </div>
                </Link>
                <Link to="/details/LION-KING">
                    <div className='max-w-[400px]   mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5'>
                        <img className="rounded-xl" src="https://bonx-react.pages.dev/static/d85b7b3a80ef33da00efb038d466d886/f3d8d/player-6.webp" alt="" />
                        <h1>LION KING</h1>
                        <h1 className="text-lg">36 LEVEL COMPLETED</h1>
                    </div>
                </Link>
                <Link to="/details/WOLF-SMART">
                    <div className='max-w-[400px]   mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5'>
                        <img className="rounded-xl" src="https://bonx-react.pages.dev/static/3afc0e66794b9f151ca4af3db3ab1a9a/f3d8d/player-5.webp" alt="" />
                        <h1>WOLF SMART</h1>
                        <h1 className="text-lg">36 LEVEL COMPLETED</h1>
                    </div>
                </Link>
                <Link to="/details/JOHNNYBRAVO">
                    <div className='max-w-[400px]   mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5'>
                        <img className="rounded-xl" src="https://bonx-react.pages.dev/static/3cbb04966ea3eee5469d6185e3e2010f/f3d8d/player-4.webp" alt="" />
                        <h1>JOHNNYBRAVO</h1>
                        <h1 className="text-lg">40 LEVEL COMPLETED</h1>
                    </div>
                </Link>
                <Link to="/details/GAMER_XBOY">
                    <div className='max-w-[400px]   mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5'>
                        <img className="rounded-xl" src="https://bonx-react.pages.dev/static/305f947a3914835165964d9cd9abc13e/f3d8d/player-3.webp" alt="" />
                        <h1>GAMER_XBOY</h1>
                        <h1 className="text-lg">40 LEVEL COMPLETED</h1>
                    </div>
                </Link>
                <Link to="/details/WARRIOR-782">
                    <div className='max-w-[400px]   mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5'>
                        <img className="rounded-xl" src="https://bonx-react.pages.dev/static/9f54993a2fb545d4c354136a3d83cb6a/f3d8d/player-2.webp" alt="" />
                        <h1 >WARRIOR-782</h1>
                        <h1 className="text-lg">60 LEVEL COMPLETED</h1>
                    </div>
                </Link>

            </div>
            <Connect />
            <Footer />
        </div>
    )
}

export default Players
