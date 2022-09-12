import React from 'react'

const WelcomeWorld = () => {
    return (
        <div className='bg-[rgb(12,2,49)] text-white w-screen py-12 bg-[url("https://bonx-react.pages.dev/static/hero-bg1-82fc7416624f7e54a222475671a5e21d.webp")] '>
            <h1 className='pr-5 pb-5 text-xl md:text-5xl font-semibold text-center  leading-[60px] max-w-3xl mx-auto'>YOU ARE MOST WELCOME IN GAMING WORLD.</h1>

            <div className='grid gap-5 px-0 pr-0 md:px-20 lg:grid-cols-2 xl:grid-cols-3 md:pr-25 '>
                <div className='bg-100 bg-center min-h-[500px]  w-full bg-no-repeat bg-[url("https://bonx-react.pages.dev/static/3caf29a42169c1a44816d27044709229/1153c/gaming-world-bg1.webp")]'>
                    <div className='flex justify-center pt-20'>
                        <img src="https://bonx-react.pages.dev/static/4775a24410aa590decde61ec5d3778c3/4f818/gaming-world1.webp" alt="" />
                    </div>
                    <div className='text-center max-w-[250px] mx-auto mt-10'>
                        <h1 className='text-lg font-extrabold'>LIVE STREAMING</h1>
                        <p>When unknown printer took type and scrambled it to make type specimen book centuries,</p>
                    </div>
                </div>
                <div className='bg-100 bg-center min-h-[500px]  w-full  bg-no-repeat bg-[url("https://bonx-react.pages.dev/static/b0da31059dafb8442b715170c873234e/1153c/gaming-world-bg2.webp")]'>
                    <div className='flex justify-center pt-20'>
                        <img src='https://bonx-react.pages.dev/static/25e5ab6ec971ffa0f181266751d06355/489fa/gaming-world2.webp' alt=""></img>
                    </div>
                    <div className='text-center max-w-[250px] mx-auto mt-10'>
                        <h1 className='text-lg font-extrabold'>GAME NEWS</h1>
                        <p>When unknown printer took type and scrambled it to make type specimen book centuries,</p>
                    </div>
                </div>
                <div className='bg-100 bg-center min-h-[500px]  w-full  bg-no-repeat bg-[url("https://bonx-react.pages.dev/static/fa0af4fcabaf1fd27846892b0ccddd2e/1153c/gaming-world-bg3.webp")]'>
                    <div className='flex justify-center pt-20'>
                        <img src='https://bonx-react.pages.dev/static/e83b494b8e47d5ffb3a35955f7499d6c/0439c/gaming-world3.webp' alt=""></img>
                    </div>
                    <div className='text-center max-w-[250px] mx-auto mt-10'>
                        <h1 className='text-lg font-extrabold'>GAME TOURNAMENTS</h1>
                        <p>When unknown printer took type and scrambled it to make type specimen book centuries,</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WelcomeWorld
