import React from 'react'

const UpCount = () => {
    return (
        <div id='s-datas-container' className='flex min-h-[300px] items-center flex-col justify-between gap-5 px-32 mt-10 md:flex-row '>
            <div className='flex flex-col gap-5 text-center'>
                <span className='text-5xl text-yellow-300 num creepster-font' data-count="697">000</span>
                <span>TWITCH STREAMS</span>
            </div>
            <div className='flex flex-col gap-5 text-center'>
                <span className='text-5xl text-blue-400 num creepster-font' data-count="520">000</span>
                <span>TOTAL GAMES</span>
            </div>
            <div className='flex flex-col gap-5 text-center'>
                <span className='text-5xl text-red-600 num creepster-font' data-count="467">000</span>
                <span>YOUTUBE STREAMS</span>
            </div>
            <div className='flex flex-col gap-5 text-center'>
                <span className='text-5xl text-purple-600 num creepster-font' data-count="249">000</span>
                <span>PRO TEAM</span>
            </div>
        </div>
    )
}

export default UpCount
