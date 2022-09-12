import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='text-white'>
            <div className='flex flex-col gap-10 px-5 py-10 lg:px-32 xl:flex-row'>
                <div className='flex flex-col xl:w-1/4'>
                    <Link to="/"> <img className='max-w-[250px]' src="https://bonx-react.pages.dev/static/3c67527ebf2c830b6278e71bd0517309/b2385/logo.webp" alt="" /></Link>
                    <p className='mb-5'>It long estabhed fact that reader will ditracted the readable content looking using readable.</p>
                    <div className='flex gap-5 text-xl'>
                        <i className="duration-300 cursor-pointer bi bi-facebook hover:text-violet-500"></i>
                        <i className="duration-300 cursor-pointer bi bi-instagram hover:text-violet-500"></i>
                        <i className="duration-300 cursor-pointer bi bi-twitter hover:text-violet-500"></i>
                        <i className="duration-300 cursor-pointer bi bi-github hover:text-violet-500 "></i>
                    </div>
                </div>

                <div className='flex flex-col xl:w-1/4'>
                    <h1 className='mb-6 text-3xl mt-7'>   CONTACT </h1>
                    <h1 className='text-[rgb(177,84,240)]'> Location:</h1>
                    <p>136 Harding Ave Wheeling, West Virginia</p>
                    <h1 className='text-[rgb(177,84,240)]'> Phone:</h1>
                    <p>00 (62) 632 867 4497</p>
                </div>
                <div className='flex flex-col xl:w-1/4'>
                    <h1 className='mb-6 text-3xl mt-7'>   INFORMATION </h1>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5'>
                            <span className='w-1/3 flex items-center justify-center p-3 border-[rgb(177,84,204)] border-[1px] rounded-lg'>
                                <img src="https://bonx-react.pages.dev/static/8a70da1cc61053ce3247477282967551/2f873/upcoming-game-thumb1.webp" alt="" />
                            </span>
                            <span className='w-1/3 flex items-center justify-center p-3 border-[rgb(177,84,204)] border-[1px] rounded-lg'>
                                <img src="https://bonx-react.pages.dev/static/371d99f93252437e28ee990e6cd87a81/53638/upcoming-game-thumb2.webp" alt="" />
                            </span>
                            <span className='w-1/3 flex items-center justify-center p-3 border-[rgb(177,84,204)] border-[1px] rounded-lg'>
                                <img src="https://bonx-react.pages.dev/static/b6308d196419bd419eac36db3d85ccbe/75d30/upcoming-game-thumb3.webp" alt="" />
                            </span>
                        </div>
                        <div className='flex gap-5'>
                            <span className='w-1/3 flex items-center justify-center p-3 border-[rgb(177,84,204)] border-[1px] rounded-lg'>
                                <img src="https://bonx-react.pages.dev/static/49cdab37cfd501af0f38f6a6cb977d49/deae7/upcoming-game-thumb4.webp" alt="" />
                            </span>
                            <span className='w-1/3 flex items-center justify-center p-3 border-[rgb(177,84,204)] border-[1px] rounded-lg'>
                                <img src="https://bonx-react.pages.dev/static/11c3d0d921957d485f13d5083c5b12c0/bafff/upcoming-game-thumb5.webp" alt="" />
                            </span>
                            <span className='w-1/3 flex items-center justify-center p-3 border-[rgb(177,84,204)] border-[1px] rounded-lg'>
                                <img src="https://bonx-react.pages.dev/static/66a226cec3bc11e1a03453e6551ad755/2aa13/upcoming-game-thumb6.webp" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col xl:w-1/4'>
                    <h1 className='mb-6 text-3xl mt-7'>   INFORMATION </h1>
                    <a className='hover:text-[rgb(177,84,204)] duration-300' href=''>Copywriting</a>
                    <a className='hover:text-[rgb(177,84,204)] duration-300' href=''>Social Media</a>
                    <a className='hover:text-[rgb(177,84,204)] duration-300' href=''>Interactive Media</a>
                    <a className='hover:text-[rgb(177,84,204)] duration-300' href=''>Motion Design</a>
                    <a className='hover:text-[rgb(177,84,204)] duration-300' href=''>Illustration</a>

                </div>
            </div>

            <div className='flex flex-col items-center justify-between gap-5 px-5 py-5 text-center bg-blue-900 md:flex-row md:text-start md:-flex-row lg:px-32'><span>  © 2022 BONX MADE WITH  BY HasThemes Terms & </span> <span>    Condition || Privacy Policy</span> </div>
        </div>
    )
}

export default Footer
