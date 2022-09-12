import React from 'react'

const GamesList = () => {
    return (

        <div className='flex flex-col items-center justify-center gap-5 px-1 py-10 text-white'>
            <div className='flex flex-col gap-5 lg:flex-row'>
                <div className='relative group'>
                    <img src="https://bonx-react.pages.dev/static/882deebd68c46fe1b369bc537cc2baea/a3622/popular-game-thumb5.webp" alt="" />
                    <button className='bg-navBtnBg opacity-0  text-lg mt-5 -translate-x-[50%] -translate-y-[50%]   lg:m-0 font-extrabold absolute left-[50%] top-[50%] items-center justify-center   h-[80px] w-[160px] bg-center bg-no-repeat duration-300 flex group-hover:opacity-100  hover:grayscale-[0.2] gap-0 hover:gap-1' ><span>Game Details</span> <i className="text-2xl bi bi-arrow-right-short "></i></button>
                </div>
                <div className='relative group '>
                    <img src="https://bonx-react.pages.dev/static/d8361c905e8aa92432541d1272f2e399/a3622/popular-game-thumb6.webp" alt="" />
                    <button className='bg-navBtnBg opacity-0 text-lg mt-5 -translate-x-[50%] -translate-y-[50%]   lg:m-0 font-extrabold absolute left-[50%] top-[50%] items-center justify-center   h-[80px] w-[160px] bg-center bg-no-repeat duration-300 group-hover:opacity-100 flex hover:grayscale-[0.2] gap-0 hover:gap-1' ><span>Game Details</span> <i className="text-2xl bi bi-arrow-right-short "></i></button>
                </div>
            </div>
            <div className='flex flex-col gap-5 lg:flex-row'>
                <div className='relative group'>
                    <img src="https://bonx-react.pages.dev/static/b1eb113142f68d5fce924f0380b372d5/a3622/popular-game-thumb1.webp" alt="" />
                    <button className='bg-navBtnBg opacity-0  text-lg mt-5 -translate-x-[50%] -translate-y-[50%]   lg:m-0 font-extrabold absolute left-[50%] top-[50%] items-center justify-center group-hover:opacity-100   h-[80px] w-[160px] bg-center bg-no-repeat duration-300 flex hover:grayscale-[0.2] gap-0 hover:gap-1' ><span>Game Details</span> <i className="text-2xl bi bi-arrow-right-short "></i></button>
                </div>
                <div className='relative group'>
                    <img src="https://bonx-react.pages.dev/static/882deebd68c46fe1b369bc537cc2baea/a3622/popular-game-thumb5.webp" alt="" />
                    <button className='bg-navBtnBg opacity-0  group-hover:opacity-100  text-lg mt-5 -translate-x-[50%] -translate-y-[50%] lg:m-0 font-extrabold absolute left-[50%] top-[50%] items-center justify-center   h-[80px] w-[160px] bg-center bg-no-repeat duration-300 flex hover:grayscale-[0.2] gap-0 hover:gap-1' ><span>Game Details</span> <i className="text-2xl bi bi-arrow-right-short "></i></button>
                </div>
            </div>
        </div>

    )
}

export default GamesList
