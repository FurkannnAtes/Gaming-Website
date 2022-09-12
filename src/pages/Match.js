import React from 'react'
import Navbar from "../components/navbar/Navbar"
import UpComingMatchCard from "../components/upComingMatchCard/UpComingMatchCard"
import Connect from "../components/connect/Connect"
import Footer from "../components/footer/Footer"
import UpCount from '../components/upCount/UpCount'

const Match = () => {
    /*Counter Up Animation*/

    function counterUp() {
        const sDataContainer = document.getElementById("s-datas-container")
        let valueDisplays = document.querySelectorAll(".num");
        let interval = 3000;
        const sDataContainerHeight = sDataContainer.clientHeight;
        const sDataContainerTop = sDataContainer.offsetTop;



        if (window.scrollY >= (sDataContainerTop - sDataContainerHeight) / 1.3 && valueDisplays[0].textContent === "000") {

            valueDisplays.forEach((valueDisplays) => {



                let startValue = 0;
                let endValue = parseInt(valueDisplays.getAttribute("data-count"));
                let duration = Math.floor(interval / endValue)
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplays.textContent = startValue;
                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }, duration)
            });

        }



    }
    window.onscroll = function () { counterUp() }
    return (
        <div className="overflow-x-hidden  overflow-y-visible bg-[rgb(14,1,49)] text-white"  >
            <Navbar />
            <div className='bg-[url("https://bonx-react.pages.dev/static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")] h-[420px] flex flex-col justify-center items-center text-white gap-10'>
                <h1 className='text-3xl xl:text-7xl creepster-font' style={{ textShadow: "3px 3px rgb(177,84,240)" }}>UPCOMING MATCH</h1>
                <h2>   <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>HOME</span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>     / </span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>MATCH</span> </h2>
            </div>

            <UpComingMatchCard />
            <UpCount />
            <Connect />
            <Footer />
        </div>
    )
}

export default Match
