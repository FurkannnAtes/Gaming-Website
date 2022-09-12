import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopRatedAbout = () => {
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
        <div className='bg-[rgb(40,30,77)]  text-white py-10'>
            <div className='flex items-center justify-between pl-10 lg:pl-16'>
                <h1 className='w-2/3 py-5 text-2xl font-extrabold md:text-6xl '>WHAT PEOPLE’S SAY ABOUT <br /> GAME STUDIO</h1>
                <div className='w-1/3 h-[5px] bg-[rgb(177,84,240)]'></div>
            </div>

            <Carousel responsive={responsive} infinite={true} className="z-10 w-11/12 mx-auto rounded-3xl bg-[rgb(14,1,49)]">
                <div className='bg-[rgb(14,1,49)] flex flex-col items-center gap-10  lg:flex-row rounded-3xl p-10 select-none'>
                    <img className='w-2/3 max-w-[250px]' src="https://bonx-react.pages.dev/static/6f7a3a9dba30f06054d8f2deee199044/262d5/testimonial-thumb.webp" alt="" />
                    <div className='flex flex-col justify-between gap-5 text-center lg:px-10 lg:text-start'>
                        <p className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur ab neque, non necessitatibus, minus odit aut atque tempore possimus ipsa nam velit officia molestias! Labore impedit ipsum nam suscipit!Dolorem provident quasi at fugiat magnam.
                        </p>
                        <h1 className='text-lg'>Furkan Ateş</h1>
                        <h2 className='text-[rgb(177,84,240)] font-semibold cursor-pointer'>Top Rated Gamer</h2>
                    </div>
                </div>
                <div className='bg-[rgb(14,1,49)] flex flex-col items-center gap-10  lg:flex-row rounded-3xl p-10 select-none'>
                    <img className='w-2/3 max-w-[250px]' src="https://bonx-react.pages.dev/static/6f7a3a9dba30f06054d8f2deee199044/262d5/testimonial-thumb.webp" alt="" />
                    <div className='flex flex-col justify-between gap-5 text-center lg:px-10 lg:text-start'>
                        <p className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur ab neque, non necessitatibus, minus odit aut atque tempore possimus ipsa nam velit officia molestias! Labore impedit ipsum nam suscipit!Dolorem provident quasi at fugiat magnam.
                        </p>
                        <h1 className='text-lg'>Furkan Ateş</h1>
                        <h2 className='text-[rgb(177,84,240)] font-semibold cursor-pointer'>Top Rated Gamer</h2>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default TopRatedAbout
