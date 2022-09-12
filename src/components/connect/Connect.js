import React from 'react'

const Connect = () => {
    return (
        <div className='py-10 bg-[url("https://bonx-react.pages.dev/static/hero-bg1-82fc7416624f7e54a222475671a5e21d.webp")] bg-no-repeat'>
            <div className='w-10/12 bg-center relative h-[400px] lg:h-[300px] text-white flex flex-col lg:flex-row justify-center lg:justify-between items-center px-20 mx-auto'>
                <span className='absolute top-0 left-0 z-10 w-full bg-no-repeat bg-cover'> <img className="mx-auto h-[400px] lg:h-[300px] rounded-[50px]" src="https://bonx-react.pages.dev/static/f469bc8ba569abbc1909d37aa6b45f60/4ef40/gaming-update.webp" alt="" /></span>
                <span className='z-20 text-2xl text-center lg:w-2/3 md:text-6xl lg:text-start'>CONNECT WITH US
                    FOR GAMING UPDATE.</span>
                <button className='bg-navBtnBg bg-cover z-20  text-lg mt-5  lg:m-0 font-extrabold flex items-center justify-center mb-2  h-[80px] w-[210px] bg-center bg-no-repeat duration-300 hover:grayscale-[0.2] gap-0 ' ><span>CONNECT NOW</span> <i className="text-2xl bi bi-arrow-right-short "></i></button>
            </div>
        </div>
    )
}

export default Connect
