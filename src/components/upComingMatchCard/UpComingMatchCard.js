import React from 'react'
import { Link } from 'react-router-dom'

const UpComingMatchCard = () => {
    return (

        <div className='flex flex-col gap-10 mt-10'>
            <div className='border-[rgb(40,30,77)] border-[5px] w-100 rounded-lg md:w-10/12 mx-auto flex flex-col xl:flex-row justify-between items-center px-10 min-h-[250px] gap-10 py-10 bg-[rgb(14,1,49)] '>

                <div className='flex flex-col gap-5 mt-5 text-center xl:mt-0 xl:text-start'>
                    <h1 >01 January, 2021, 06:01:00 AM</h1>
                    <h1 className='text-2xl cursor-pointer font-extrabold duration-300 hover:text-[rgb(177,84,240)]'>ROAR SPRING GAME 2021</h1>
                    <h1 className='text-[rgb(177,84,240)]'>04 Teams Registered</h1>
                </div>
                <div className='flex flex-col items-center gap-5 xl:ml-auto xl:mr-5 '>
                    <div className='w-[80px] h-[80px] md:h-[100px] mb-5 md:w-[100px] rounded-full flex justify-center items-center bg-[rgb(177,84,240)]'>   <img className='cursor-pointer w-100' src="https://bonx-react.pages.dev/static/fdc95973546d2574f6e53e8c433306c3/bfafd/play-btn2.webp" alt="" />

                    </div>
                    <h6>Youtube Stream</h6>
                </div>

                <div className='flex gap-10 '>
                    <Link to="/details/team/ANOYMOUS"><img className='w-[60px] md:w-auto' src="https://bonx-react.pages.dev/static/b6308d196419bd419eac36db3d85ccbe/be1f5/upcoming-game-thumb3.webp" alt="" /></Link>
                    <img className='w-[60px] md:w-auto ' src='https://bonx-react.pages.dev/static/1d44d2c6b40f9c3613568f7fa08f3cd1/34ef4/game-vs1.webp' alt='' />
                    <Link to="/details/team/PANDA"> <img className='w-[60px] md:w-auto' src='https://bonx-react.pages.dev/static/8a70da1cc61053ce3247477282967551/22d06/upcoming-game-thumb1.webp' alt='' /></Link>



                </div>

            </div>
            <div className='border-[rgb(40,30,77)] border-[5px] w-100 rounded-lg md:w-10/12 mx-auto flex flex-col xl:flex-row justify-between items-center px-10 min-h-[250px] gap-10 py-10 bg-[rgb(14,1,49)] '>

                <div className='flex flex-col gap-5 mt-5 text-center xl:mt-0 xl:text-start'>
                    <h1 >01 January, 2021, 06:01:00 AM</h1>
                    <h1 className='text-2xl cursor-pointer font-extrabold duration-300 hover:text-[rgb(177,84,240)]'>ROAR SPRING GAME 2021</h1>
                    <h1 className='text-[rgb(177,84,240)]'>04 Teams Registered</h1>
                </div>
                <div className='flex flex-col items-center gap-5 xl:ml-auto xl:mr-5 '>
                    <div className='w-[80px] h-[80px] md:h-[100px] mb-5 md:w-[100px] rounded-full flex justify-center items-center bg-[rgb(177,84,240)]'>   <img className='cursor-pointer w-100' src="https://bonx-react.pages.dev/static/fdc95973546d2574f6e53e8c433306c3/bfafd/play-btn2.webp" alt="" />

                    </div>
                    <h6>Youtube Stream</h6></div>

                <div className='flex gap-10'>
                    <Link to="/details/team/ANOYMOUS">   <img className='w-[60px] md:w-auto' src="https://bonx-react.pages.dev/static/b6308d196419bd419eac36db3d85ccbe/be1f5/upcoming-game-thumb3.webp" alt="" /></Link>
                    <img className='w-[60px] md:w-auto ' src='https://bonx-react.pages.dev/static/1d44d2c6b40f9c3613568f7fa08f3cd1/34ef4/game-vs1.webp' alt='' />
                    <Link to="/details/team/NINJA">    <img className='w-[60px] md:w-auto' src='https://bonx-react.pages.dev/static/371d99f93252437e28ee990e6cd87a81/56bad/upcoming-game-thumb2.webp' alt='' /></Link>



                </div>

            </div>
            <div className='border-[rgb(40,30,77)] border-[5px] w-100 rounded-lg md:w-10/12 mx-auto flex flex-col xl:flex-row justify-between items-center px-10 min-h-[250px] gap-10 py-10 bg-[rgb(14,1,49)] '>

                <div className='flex flex-col gap-5 mt-5 text-center xl:mt-0 xl:text-start'>
                    <h1 >01 January, 2021, 06:01:00 AM</h1>
                    <h1 className='text-2xl cursor-pointer font-extrabold duration-300 hover:text-[rgb(177,84,240)]'>ROAR SPRING GAME 2021</h1>
                    <h1 className='text-[rgb(177,84,240)]'>04 Teams Registered</h1>
                </div>
                <div className='flex flex-col items-center gap-5 xl:ml-auto xl:mr-5 '>
                    <div className='w-[80px] h-[80px] md:h-[100px] mb-5 md:w-[100px] rounded-full flex justify-center items-center bg-[rgb(177,84,240)]'>   <img className='cursor-pointer w-100' src="https://bonx-react.pages.dev/static/fdc95973546d2574f6e53e8c433306c3/bfafd/play-btn2.webp" alt="" />

                    </div>
                    <h6>Youtube Stream</h6></div>

                <div className='flex gap-10'>
                    <Link to="/details/team/PANDA">  <img className='w-[60px] md:w-auto' src='https://bonx-react.pages.dev/static/8a70da1cc61053ce3247477282967551/22d06/upcoming-game-thumb1.webp' alt='' /> </Link>
                    <img className='w-[60px] md:w-auto ' src='https://bonx-react.pages.dev/static/1d44d2c6b40f9c3613568f7fa08f3cd1/34ef4/game-vs1.webp' alt='' />
                    <Link to="/details/team/NINJA">   <img className='w-[60px] md:w-auto' src='https://bonx-react.pages.dev/static/371d99f93252437e28ee990e6cd87a81/56bad/upcoming-game-thumb2.webp' alt='' /></Link>



                </div>

            </div>
        </div>

    )
}

export default UpComingMatchCard
