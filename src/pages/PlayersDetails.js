import React from 'react'

import { useParams } from 'react-router-dom'
import Connect from '../components/connect/Connect';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const PlayersDetails = ({ playersList }) => {
    let { userName } = useParams();

    return (
        <div className="overflow-x-hidden  overflow-y-visible bg-[rgb(14,1,49)] text-white ">
            <Navbar />
            <div className='bg-[url("https://bonx-react.pages.dev/static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")] h-[420px] flex flex-col justify-center items-center text-white gap-10'>
                <h1 className='text-3xl xl:text-7xl creepster-font' style={{ textShadow: "3px 3px rgb(177,84,240)" }}>PLAYER Details</h1>
                <h2>   <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>HOME</span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>     / </span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>PLAYER DETAİLS</span> </h2>
            </div>
            {playersList.filter(card => card.name === userName).map((card, index) => (
                <div key={index} className="flex flex-col lg:flex-row gap-5 lg:px-20 py-10">
                    <div className='md:min-w-[400px] p-2 flex justify-center'>
                        <img src={card.imgURL} alt="" />
                    </div>
                    <div className='flex flex-col px-5 mt-5 lg:mt-0 lg:px-20 justify-around'>
                        <div className='flex gap-5 items-center'>
                            <div className='w-[80px] bg-[rgb(177,84,204)] h-[3px]'></div>
                            <div className='text-[rgb(177,84,204)]'>PLAYER PROFILE</div>
                        </div>
                        <div className='text-5xl'>SPACE GAME EXPERT</div>
                        <p>It is a long established fact that a reader will be distracted readable content page when looking at it layout the point using lorem Ipsum that it has more-or-less normal distribution lette desktop packages and web page now editors. </p>
                        <p>It is a long established fact that a reader will be distracted readable content page when looking at it layout the point using lorem Ipsum that it has more-or-less normal distribution lette desktop packages and web page now editors. </p>
                        <button className='bg-navBtnBg  text-lg mt-5  lg:m-0 font-extrabold flex items-center justify-center mb-2  h-[80px] w-[160px] bg-center bg-no-repeat duration-300 hover:grayscale-[0.2] gap-0 hover:gap-3' ><span>Contact</span> <i className="bi bi-arrow-right-short text-2xl  "></i></button>
                    </div>
                </div>
            ))}
            <Connect />
            <Footer />
        </div>
    )
}

export default PlayersDetails
