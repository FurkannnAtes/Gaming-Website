import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    function navCollapse() {
        let collapseMenu = document.getElementById("mainNavCollapse")

        collapseMenu.classList.toggle("h-0")

    }

    return (
        <nav id='mainNavbar' className='z-50 flex bg-[rgb(14,11,56,0.7)] xl:bg-transparent w-screen fixed top-0 left-0 px-10 items-center justify-between xl:px-20 h-[90px] py-[10px] text-white'>
            <div><Link to="/"> <img src="https://bonx-react.pages.dev/static/3c67527ebf2c830b6278e71bd0517309/b2385/logo.webp" alt="" /></Link></div>
            <div id='mainNavCollapse' className='h-0 overflow-hidden w-screen xl:w-auto absolute left-0 top-[90px] xl:relative xl:left-auto xl:flex justify-between items-center  xl:top-auto  text-center xl:text-left xl:h-full bg-[rgb(14,11,56,0.7)] xl:bg-transparent'>
                <ul className='flex flex-col gap-5 bg-transparent xl:flex-row'>
                    <Link to="/"> <li className='duration-500 hover:text-[rgb(177,84,204)]'>HOME</li></Link>
                    <Link to="/match">  <li className='duration-500 hover:text-[rgb(177,84,204)]'>MATCH</li></Link>
                    <Link to="/about">  <li className='duration-500 hover:text-[rgb(177,84,204)]'>ABOUT</li></Link>
                    <Link to="/games">  <li className='duration-500 hover:text-[rgb(177,84,204)]'>GAMES</li></Link>
                    <Link to="/players">  <li className='duration-500 hover:text-[rgb(177,84,204)]'>PLAYERS</li></Link>
                    <Link to="/faq">  <li className='duration-500 hover:text-[rgb(177,84,204)]'>FAQ</li></Link>
                    <Link to="/bettleteams">  <li className='duration-500 hover:text-[rgb(177,84,204)]'>BETTLE TEAM</li></Link>
                    <Link to="/blog"> <li className='duration-500 hover:text-[rgb(177,84,204)]'>BLOG</li></Link>
                    <Link to="/contact"> <li className='duration-500 hover:text-[rgb(177,84,204)]'>CONTACT</li></Link>
                </ul>
                <Link to="/login"> <button className='xl:hidden bg-navBtnBg text-lg mt-5 mx-auto xl:m-0 font-extrabold flex items-center justify-center mb-2  h-[80px] w-[160px] bg-center bg-no-repeat duration-300 hover:grayscale-[0.2] ' ><span>SIGN UP</span> <i className="text-2xl bi bi-arrow-right-short "></i></button></Link>
            </div>
            <Link to="/login">   <button className='hidden xl:flex bg-navBtnBg text-lg mt-5 mx-auto xl:m-0 font-extrabold  items-center justify-center  h-[80px] w-[160px] bg-center bg-no-repeat duration-300 hover:grayscale-[0.2] ' ><span>SIGN UP</span> <i className="text-2xl bi bi-arrow-right-short "></i></button>
                <button onClick={() => navCollapse()} className='text-4xl xl:hidden'> <i className="bi bi-list"></i></button></Link>
        </nav>
    )
}

export default Navbar
