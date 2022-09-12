import React from 'react'
import { useParams } from 'react-router-dom'
import Connect from '../components/connect/Connect';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const TeanDetail = ({ teams }) => {
    let { teamName } = useParams();
    return (
        <div className="overflow-x-hidden  overflow-y-visible bg-[rgb(14,1,49)] text-white ">
            <Navbar />
            <div className='bg-[url("https://bonx-react.pages.dev/static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")] h-[420px] flex flex-col justify-center items-center text-white gap-10'>
                <h1 className='text-3xl xl:text-7xl creepster-font' style={{ textShadow: "3px 3px rgb(177,84,240)" }}>{teamName}</h1>
                <h2>   <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>HOME</span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>     / </span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>TEAM DETAİLS</span> </h2>
            </div>
            {teams.filter(card => card.name === teamName).map((card, index) => (
                <div key={index} className="flex flex-col gap-10  lg:w-9/12 mx-auto py-10 min-h-[500px]">
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex flex-col items-center justify-center gap-5 min-w-[100px]'>
                            <img src={card.imgURL} alt="" />
                            <div className='creepster-font text-center text-3xl' style={{ textShadow: "3px 3px rgb(177,84,240)" }}>{card.name}</div>
                        </div>
                        <div className='flex flex-col px-10 gap-5  md:px-0 lg:px-20 justify-around'>
                            <div className='flex gap-5 items-center'>
                                <div className='w-[80px] bg-[rgb(177,84,204)] h-[3px]'></div>
                                <div className='text-[rgb(177,84,204)] text-xl'>ABOUT TEAM</div>
                            </div>

                            <p>UI/UX - Designer Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequatur quae pariatur aut deserunt nemo provident, possimus iste dolor dicta sint porro ut. Eveniet libero voluptatum dolor sit amet consectetur adipisicing elit. Sapiente, consequatur quae pariatur aut deserunt nemo provident, possimus iste dolor dicta sint porro ut. Eveniet libero voluptatum architecto architecto ratione corrupti cupiditate!</p>
                            <button className='bg-navBtnBg  text-lg mt-5  lg:m-0 font-extrabold flex items-center justify-center mb-2  h-[80px] w-[160px] bg-center bg-no-repeat duration-300 hover:grayscale-[0.2] gap-0 hover:gap-3' ><span>Contact</span> <i className="bi bi-arrow-right-short text-2xl  "></i></button>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 px-10  justify-evenly items-center mx-auto min-h-[150px] py-10 bg-[rgb(24,14,65)]'>
                        <div className='h-[70px] w-[170px] rounded-lg flex flex-col justify-center items-center bg-[rgb(66,58,95)]'><span>{card.gamePlay}</span> <span>  Game Play</span></div>
                        <div className='h-[70px] w-[170px] rounded-lg flex flex-col justify-center items-center bg-[rgb(66,58,95)]'><span>{card.gameWins}</span> <span>  Game Wİns</span></div>
                        <div className='h-[70px] w-[170px] rounded-lg flex flex-col justify-center items-center bg-[rgb(66,58,95)]'><span>{card.gameLoses}</span> <span>  Game Loses</span></div>
                        <div className='h-[70px] w-[170px] rounded-lg flex flex-col justify-center items-center bg-[rgb(66,58,95)]'><span>{card.gameDraws}</span> <span>  Game Draws</span></div>
                    </div>
                </div>
            ))}
            <Connect />
            <Footer />
        </div>
    )
}

export default TeanDetail
