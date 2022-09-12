
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from "./pages/Home";
import Match from "./pages/Match";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BettleTeams from "./pages/BettleTeams";
import Players from "./pages/Players";
import Games from "./pages/Games";
import PlayersDetails from "./pages/PlayersDetails";
import TeamDetail from "./pages/TeamDetail";


function App() {
  const teams = [
    {
      "name": "PANDA",
      "gamePlay": "15",
      "gameWins": "08",
      "gameLoses": "07",
      "gameDraws": "00",
      "imgURL": "https://bonx-react.pages.dev/static/8a70da1cc61053ce3247477282967551/22d06/upcoming-game-thumb1.webp"
    },
    {
      "name": "NINJA",
      "gamePlay": "12",
      "gameWins": "06",
      "gameLoses": "06",
      "gameDraws": "00",
      "imgURL": "https://bonx-react.pages.dev/static/371d99f93252437e28ee990e6cd87a81/56bad/upcoming-game-thumb2.webp"
    },
    {
      "name": "ANOYMOUS",
      "gamePlay": "11",
      "gameWins": "05",
      "gameLoses": "06",
      "gameDraws": "00",
      "imgURL": "https://bonx-react.pages.dev/static/b6308d196419bd419eac36db3d85ccbe/be1f5/upcoming-game-thumb3.webp"
    },
    {
      "name": "BULL",
      "gamePlay": "08",
      "gameWins": "03",
      "gameLoses": "04",
      "gameDraws": "01",
      "imgURL": "https://bonx-react.pages.dev/static/66a226cec3bc11e1a03453e6551ad755/ab66f/upcoming-game-thumb6.webp"
    },
    {
      "name": "GAMER",
      "gamePlay": "15",
      "gameWins": "08",
      "gameLoses": "06",
      "gameDraws": "01",
      "imgURL": "https://bonx-react.pages.dev/static/49cdab37cfd501af0f38f6a6cb977d49/c92b6/upcoming-game-thumb4.webp"
    }, {
      "name": "HOLIGANS",
      "gamePlay": "10",
      "gameWins": "04",
      "gameLoses": "06",
      "gameDraws": "00",
      "imgURL": "https://bonx-react.pages.dev/static/66a226cec3bc11e1a03453e6551ad755/ab66f/upcoming-game-thumb6.webp"
    }
  ]

  const playersList = [
    {
      "name": "THUNDERMAN",
      "lv": "36 LEVEL COMPLETED",
      "imgURL": "https://bonx-react.pages.dev/static/89eb02cc445e8ee55c3b7172ac430fca/f3d8d/player-1.webp"
    },
    {
      "name": "LION-KING",
      "lv": "36 LEVEL COMPLETED",
      "imgURL": "https://bonx-react.pages.dev/static/d85b7b3a80ef33da00efb038d466d886/f3d8d/player-6.webp"
    },
    {
      "name": "WOLF-SMART",
      "lv": "36 LEVEL COMPLETED",
      "imgURL": "https://bonx-react.pages.dev/static/3afc0e66794b9f151ca4af3db3ab1a9a/f3d8d/player-5.webp"
    },
    {
      "name": "JOHNNYBRAVO",
      "lv": "40 LEVEL COMPLETED",
      "imgURL": "https://bonx-react.pages.dev/static/3cbb04966ea3eee5469d6185e3e2010f/f3d8d/player-4.webp"
    },
    {
      "name": "GAMER_XBOY",
      "lv": "40 LEVEL COMPLETED",
      "imgURL": "https://bonx-react.pages.dev/static/305f947a3914835165964d9cd9abc13e/f3d8d/player-3.webp"
    },
    {
      "name": "WARRIOR-782",
      "lv": "60 LEVEL COMPLETED",
      "imgURL": "https://bonx-react.pages.dev/static/9f54993a2fb545d4c354136a3d83cb6a/f3d8d/player-2.webp"
    }
  ]

  //scroll to top
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  //Navbar scroll change



  window.onscroll = function () { scrollFunction(); };





  function scrollFunction() {
    let mainNavbar = document.getElementById("mainNavbar");


    if (document.documentElement.scrollTop > 80) {
      mainNavbar.classList.remove("xl:bg-transparent");


    } else if (document.documentElement.scrollTop > 80 || window.screen.width > 992) {
      mainNavbar.classList.add("xl:bg-transparent");

    }

  }



  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/match" element={<Match />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/bettleteams" element={<BettleTeams />} />
        <Route path="/details/team/:teamName" element={<TeamDetail teams={teams} />} />
        <Route path="/players" element={<Players />} />
        <Route path="/details/:userName" element={<PlayersDetails playersList={playersList} />} />
        <Route path="/games" element={<Games />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
