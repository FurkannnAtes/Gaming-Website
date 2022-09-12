import Banner from "../components/banner/Banner";
import Blog from "../components/blog/Blog";
import Connect from "../components/connect/Connect";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import PopularGames from "../components/popularGames/PopularGames";
import StreamVideosCarousel from "../components/streamVideosCarousel/StreamVideosCarousel";
import TopRatedAbout from "../components/topRatedAbout/TopRatedAbout";
import UpComingMatch from "../components/upComingMatch/UpComingMatch";
import WelcomeWorld from "../components/welcomeWorld/WelcomeWorld";


const Home = () => {
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
        <div className="overflow-x-hidden  overflow-y-visible bg-[rgb(14,1,49)]   ">
            <Navbar />
            <Banner />
            <WelcomeWorld />
            <StreamVideosCarousel />
            <UpComingMatch />
            <PopularGames />
            <TopRatedAbout />
            <Blog />
            <Connect />
            <Footer />
        </div>
    )
}

export default Home
