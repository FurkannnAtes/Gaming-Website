import React from 'react'
import { Link } from 'react-router-dom'
import Connect from '../components/connect/Connect'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const BettleTeams = () => {
    return (
        <div className="overflow-x-hidden  overflow-y-visible bg-[rgb(14,1,49)] ">
            <Navbar />
            <div className='bg-[url("https://bonx-react.pages.dev/static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")] h-[420px] flex flex-col justify-center items-center text-white gap-10'>
                <h1 className='text-3xl xl:text-7xl creepster-font' style={{ textShadow: "3px 3px rgb(177,84,240)" }}>ALL BETTLE TEAM</h1>
                <h2>   <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>HOME</span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>     / </span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>BETTLE TEAM</span> </h2>
            </div>
            <div className='grid grid-cols-1 gap-5 py-20 md:grid-cols-2 lg:grid-cols-3 lg:px-20'>
                <Link to="/details/team/ANOYMOUS"> <div className='max-w-[400px] border-2 rounded-xl border-[rgb(40,30,77)] mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5 p-20'>
                    <img src="https://bonx-react.pages.dev/static/b6308d196419bd419eac36db3d85ccbe/be1f5/upcoming-game-thumb3.webp" alt="" />
                    <h1>Anoymous</h1>
                </div>
                </Link>
                <Link to="/details/team/BULL">
                    <div className='max-w-[400px] border-2 rounded-xl border-[rgb(40,30,77)] mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5 p-20'>
                        <img src="https://bonx-react.pages.dev/static/66a226cec3bc11e1a03453e6551ad755/ab66f/upcoming-game-thumb6.webp" alt="" />
                        <h1>Bull</h1>
                    </div>
                </Link>
                <Link to="/details/team/GAMER">
                    <div className='max-w-[400px] border-2 rounded-xl border-[rgb(40,30,77)] mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5 p-20'>
                        <img src="https://bonx-react.pages.dev/static/49cdab37cfd501af0f38f6a6cb977d49/c92b6/upcoming-game-thumb4.webp" alt="" />
                        <h1>Gamer</h1>
                    </div>
                </Link>
                <Link to="/details/team/HOLIGANS">
                    <div className='max-w-[400px] border-2 rounded-xl border-[rgb(40,30,77)] mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5 p-20'>
                        <img src="https://bonx-react.pages.dev/static/11c3d0d921957d485f13d5083c5b12c0/e2e1f/upcoming-game-thumb5.webp" alt="" />
                        <h1>Holigans</h1>
                    </div>
                </Link>
                <Link to="/details/team/NINJA">
                    <div className='max-w-[400px] border-2 rounded-xl border-[rgb(40,30,77)] mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5 p-20'>
                        <img src="https://bonx-react.pages.dev/static/371d99f93252437e28ee990e6cd87a81/56bad/upcoming-game-thumb2.webp" alt="" />
                        <h1>Ninja</h1>
                    </div>
                </Link>
                <Link to="/details/team/PANDA">
                    <div className='max-w-[400px] border-2 rounded-xl border-[rgb(40,30,77)] mx-auto flex flex-col items-center text-white text-2xl font-extrabold gap-5 p-20'>
                        <img src="https://bonx-react.pages.dev/static/8a70da1cc61053ce3247477282967551/22d06/upcoming-game-thumb1.webp" alt="" />
                        <h1>Panda</h1>
                    </div>
                </Link>

            </div>
            <Connect />
            <Footer />
        </div>
    )
}

export default BettleTeams
