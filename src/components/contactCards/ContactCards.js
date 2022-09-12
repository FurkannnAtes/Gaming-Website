import React from 'react'

const ContactCards = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-5    lg:px-10 py-10 min-h-[600px]'>
            <div className='relative   w-screen xl:w-1/3 h-[500px] mx-auto flex justify-center  '>
                <div className='absolute w-96'>
                    <img className='z-0 w-full h-full p-5 ' src="https://bonx-react.pages.dev/static/b0da31059dafb8442b715170c873234e/1153c/gaming-world-bg2.webp" alt="" />
                    <img className='absolute top-20 left-[50%] translate-x-[-50%]' src="https://bonx-react.pages.dev/static/82a7e9bd209faab41b57faef2cd9a550/80bf1/email.webp" alt="" />
                    <div className='absolute flex flex-col text-white bottom-20 left-[50%] translate-x-[-50%] text-center gap-2'>
                        <span className='text-3xl font-extrabold '>EMAIL:</span>
                        <span>Example@hotmail.com</span>
                        <span>Example@hotmail.com</span>
                    </div>
                </div>

            </div>
            <div className='relative    flex justify-center  w-screen xl:w-1/3 h-[500px] mx-auto'>
                <div className='absolute w-96'>
                    <img className='z-0 w-full h-full p-5' src="https://bonx-react.pages.dev/static/b0da31059dafb8442b715170c873234e/1153c/gaming-world-bg2.webp" alt="" />
                    <img className='absolute top-20 left-[50%] translate-x-[-50%]' src="https://bonx-react.pages.dev/static/15bbee12a713f2ae3e1198f4be6e4db4/80bf1/location.webp" alt="" />
                    <div className='absolute flex flex-col text-white bottom-20 left-[50%] translate-x-[-50%] text-center gap-2'>
                        <span className='text-3xl font-extrabold '>LOCATION:</span>
                        <span>100 N Aurora Ave #APT 19 <br /> Oakland, Nebraska(NE), 68045</span>

                    </div>
                </div>

            </div>
            <div className='relative pr-5   flex justify-center w-screen xl:w-1/3 h-[500px] mx-auto'>
                <div className='absolute w-96'>
                    <img className='z-0 w-full h-full p-5' src="https://bonx-react.pages.dev/static/b0da31059dafb8442b715170c873234e/1153c/gaming-world-bg2.webp" alt="" />
                    <img className='absolute top-20 left-[50%] translate-x-[-50%]' src="https://bonx-react.pages.dev/static/1eef2e4013e75f7aa767919f1fd339c2/80bf1/phone.webp" alt="" />
                    <div className='absolute flex flex-col text-white bottom-20 left-[50%] translate-x-[-50%] text-center gap-2'>
                        <span className='text-3xl font-extrabold '>PHONE:</span>
                        <span>(502)555-5952</span>
                        <span>+88 (00) 4555 452 </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactCards
