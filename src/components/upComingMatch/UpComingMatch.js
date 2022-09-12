import React from 'react'
import UpComingMatchCard from '../upComingMatchCard/UpComingMatchCard'
import UpCount from '../upCount/UpCount'

const UpComingMatch = () => {


    return (
        <div className='text-white bg-[url("https://bonx-react.pages.dev/static/hero-bg1-82fc7416624f7e54a222475671a5e21d.webp")] bg-no-repeat py-10'>
            <h1 className='text-xl font-semibold text-center md:text-5xl'>UPCOMING MATCH</h1>
            <p className='mt-2 text-lg text-center md:text-xl '>When unknown printer took type and scrambled it to make <br /> type specimen book centuries,</p>

            <UpComingMatchCard />
            <div >
                <button className='bg-navBtnBg  mx-auto text-lg mt-5  font-extrabold flex items-center justify-center mb-2  h-[80px] w-[160px] bg-center bg-no-repeat duration-300 hover:grayscale-[0.2] gap-0 hover:gap-3' ><span>Other's Match</span></button>
            </div>

            <UpCount />
        </div>
    )
}

export default UpComingMatch
