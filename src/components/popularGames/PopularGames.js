import React from 'react'
import GamesList from '../gamesList/GamesList'

const PopularGames = () => {
    return (
        <div className='py-10 bg-[url("https://bonx-react.pages.dev/static/hero-bg1-82fc7416624f7e54a222475671a5e21d.webp")] bg-no-repeat '>
            <h1 className='mb-3 text-2xl font-extrabold text-center text-white md:text-4xl'>   POPULAR GAME </h1>
            <p className='w-2/3 mx-auto text-xl font-semibold text-center text-white md:text-2xl'>When unknown printer took type and scrambled it to make type specimen book centuries,</p>
            <GamesList />
        </div>
    )
}

export default PopularGames
