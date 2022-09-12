import React from 'react'

const AboutDetail = () => {
    return (
        <div className='flex flex-col w-10/12 gap-5 py-10 mx-auto select-none xl:flex-row'>
            <img className='rounded-full max-w-[500px] max-h-[500px] my-auto' src="https://bonx-react.pages.dev/static/de87a9438d9ced9d9a8ad05472a93255/6eaef/about-thumb.webp" alt="" />
            <div className='flex flex-col gap-10 py-10'>
                <div className='flex items-center gap-5 text-3xl font-extrabold text-[rgb(177,84,204)]'> <div className='bg-[rgb(177,84,204)] w-1/3 h-[5px] hidden md:flex'></div>  <div>ABOUT BONX STUDIO</div>
                </div>
                <div className='text-5xl font-semibold'> BONX IS THE BEST GAMING STUDIO FOR ALL GAMER.  </div>
                <p>It is a long established fact that a reader will be distracted the readable content of page when looking at it layout the point using lorem Ipsum is that it has a more-or-less normal distribution.</p>
                <p>It is a long established fact that a reader will be distracted the readable content of page when looking at it layout the point using lorem Ipsum is that it has a more-or-less normal distribution.</p>
                <button className='bg-navBtnBg  text-lg mt-5  lg:m-0 font-extrabold flex items-center justify-center mb-2  h-[80px] w-[160px] bg-center bg-no-repeat duration-300 hover:grayscale-[0.2] gap-0 hover:gap-3' ><span>PLAY NOW</span> <i className="text-2xl bi bi-arrow-right-short "></i></button>
            </div>
        </div>
    )
}

export default AboutDetail
