import React from 'react'

const Banner = () => {
    return (
        <div className='flex items-center bg-[url("https://bonx-react.pages.dev/static/hero-bg1-82fc7416624f7e54a222475671a5e21d.webp")] min-h-screen relative'>

            <div className='absolute right:50 md:right-20 bottom-0 md:w-[700px]'><img className='w-full ' src="https://bonx-react.pages.dev/static/1f5867f8036d938b9dfdaed5530c9249/a5da6/hero-position-img.webp" alt="" />
            </div>

            <div className='text-white mt-10 lg:mt-0 z-10 ml-5 md:ml-20 flex flex-col gap-5'>
                <h1 className='text-7xl xl:text-9xl creepster-font' style={{ textShadow: "3px 3px rgb(177,84,240)" }}>BEST GAME <br /> PLAYING TODAY.</h1>
                <p className='text-xl lg:text-2xl pl-1'>Simply text of the printing and typesetting industry.</p>
                <button className='bg-navBtnBg  text-lg mt-5  lg:m-0 font-extrabold flex items-center justify-center mb-2  h-[80px] w-[160px] bg-center bg-no-repeat duration-300 hover:grayscale-[0.2] gap-0 hover:gap-3' ><span>PLAY NOW</span> <i className="bi bi-arrow-right-short text-2xl  "></i></button>
            </div>

        </div>
    )
}

export default Banner
