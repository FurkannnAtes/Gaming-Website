import React from 'react'

const Blog = () => {
    return (
        <div className='bg-[url("https://bonx-react.pages.dev/static/body-bg-75163e67f04c506397c3885b6dcce035.webp")] py-10'>
            <h1 className='mb-3 text-2xl font-extrabold text-center text-white md:text-4xl'>LATEST BLOG </h1>
            <p className='w-2/3 mx-auto text-xl font-semibold text-center text-white md:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

            <div className='flex flex-col gap-5 py-10'>
                <div className='flex flex-col w-11/12 gap-5 mx-auto justify-evenly lg:flex-row'>
                    <div className='flex flex-col gap-5 mx-auto md:flex-row'>
                        <img className='rounded-3xl' src="https://bonx-react.pages.dev/static/1a621f264f37970b1736c359481d437e/8b00d/7.webp" alt="" />
                        <div className='flex flex-col gap-5 text-white justify-evenly'>
                            <div className='gap-2 flex-'>
                                <i className="bi bi-calendar text-[rgb(177,84,240)]"></i> <span>21 April, 2021</span>
                            </div>
                            <div className='text-xl font-semibold hover:text-[rgb(177,84,240)] duration-300 cursor-pointer'>
                                INCIDUNT VITAE NEW APPS 2022
                            </div>
                            <div className='flex items-center gap-4'>
                                <span className='bg-[rgb(177,84,240)] w-1/3 h-[2px] hidden md:block'></span>  <span>MORE DEATAILS </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 mx-auto md:flex-row'>
                        <img className='rounded-3xl' src="https://bonx-react.pages.dev/static/d161f004dec37a028adaf60369449636/8b00d/8.webp" alt="" />
                        <div className='flex flex-col gap-5 text-white justify-evenly'>
                            <div className='gap-2 flex-'>
                                <i className="bi bi-calendar text-[rgb(177,84,240)]"></i> <span>21 April, 2021</span>
                            </div>
                            <div className='text-xl font-semibold hover:text-[rgb(177,84,240)] duration-300 cursor-pointer'>
                                INCIDUNT VITAE NEW APPS 2022
                            </div>
                            <div className='flex items-center gap-4'>
                                <span className='bg-[rgb(177,84,240)] w-1/3 h-[2px] hidden md:block'></span>  <span>MORE DEATAILS </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-11/12 gap-5 mx-auto justify-evenly lg:flex-row'>
                    <div className='flex flex-col gap-5 mx-auto md:flex-row'>
                        <img className='rounded-3xl' src="https://bonx-react.pages.dev/static/4cc8de25f33d7c35094f5a5a6ddc0d30/8b00d/4.webp" alt="" />
                        <div className='flex flex-col gap-5 text-white justify-evenly'>
                            <div className='gap-2 flex-'>
                                <i className="bi bi-calendar text-[rgb(177,84,240)]"></i> <span>21 April, 2021</span>
                            </div>
                            <div className='text-xl font-semibold hover:text-[rgb(177,84,240)] duration-300 cursor-pointer'>
                                INCIDUNT VITAE NEW APPS 2022
                            </div>
                            <div className='flex items-center gap-4'>
                                <span className='bg-[rgb(177,84,240)] w-1/3 h-[2px] hidden md:block'></span>  <span>MORE DEATAILS </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 mx-auto md:flex-row'>
                        <img className='rounded-3xl ' src="https://bonx-react.pages.dev/static/995f224cd12a5729662a62614f4eba85/8b00d/3.webp" alt="" />
                        <div className='flex flex-col gap-5 text-white justify-evenly'>
                            <div className='gap-2 flex-'>
                                <i className="bi bi-calendar text-[rgb(177,84,240)]"></i> <span>21 April, 2021</span>
                            </div>
                            <div className='text-xl font-semibold hover:text-[rgb(177,84,240)] duration-300 cursor-pointer'>
                                INCIDUNT VITAE NEW APPS 2022
                            </div>
                            <div className='flex items-center gap-4'>
                                <span className='bg-[rgb(177,84,240)] w-1/3 h-[2px] hidden md:block'></span>  <span>MORE DEATAILS </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog
