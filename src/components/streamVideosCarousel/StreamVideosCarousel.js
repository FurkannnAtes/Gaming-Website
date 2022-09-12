import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const StreamVideosCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='py-10 '>
            <Carousel responsive={responsive} infinite={true} className="z-10">
                <div className='relative flex items-center justify-center'>
                    <button className='absolute flex items-center justify-center '><span className='absolute rounded-full carousel-btn-animation'></span><img className='z-10 w-1/2 sm:w-full' src="https://bonx-react.pages.dev/static/c1a7a32d0b562b2ea62f64765a3e8213/1db2c/play-btn.webp" alt="" /></button>
                    <img className='mx-auto' src="https://bonx-react.pages.dev/static/40259a30cb4b2bf6d1b9877053fa1183/0a8d7/gaming-bg1.webp" alt="" />
                    <div className='absolute bottom-0 items-start justify-center hidden w-1/2 text-white trapezoid md:flex '><span className='w-full pt-6 text-xl font-extrabold text-center'>WATCH LIVE STREAMING</span></div>

                </div>




            </Carousel>

        </div>
    )
}

export default StreamVideosCarousel
