// Router
import router from "./js/utilities/router.js";

// Components
import Stars from "./js/components/Stars.js";
import Navbar from "./js/components/Navbar.js";
import Footer from "./js/components/Footer.js";
import PlayCard from "./js/components/PlayCard.js";
import FriendsList from "./js/components/FriendsList.js";
import SearchList from "./js/components/SearchList.js";
import FriendCard from "./js/components/FriendCard.js";
import FriendCardPopup from "./js/components/FriendCardPopup.js";
import PlayerCard from "./js/components/PlayerCard.js";
import MatchCard from "./js/components/MatchCard.js";
import MatchHistory from "./js/components/MatchHistory.js";
import LoginButton from "./js/components/LoginButton.js";
import TwofaInput from "./js/components/TwofaInput.js";
import TournamentCard from "./js/components/TournamentCard.js";
import TournamentPlayers from "./js/components/TournamentPlayers.js";
import TournamentPopup from "./js/components/TournamentPopup.js";
import TournamentMatches from "./js/components/TournamentMatches.js";
import TournamentMatchCard from "./js/components/TournamentMatchCard.js";
import TournamentPlayerCard from "./js/components/TournamentPlayerCard.js";

// Pages
import GamePage from "./js/pages/GamePage.js";
import Tictactoe from "./js/pages/TictactoePage.js";
import HomePage from "./js/pages/HomePage.js";
import LoginPage from "./js/pages/LoginPage.js";
import TwofaPage from "./js/pages/TwofaPage.js";
import ProfilePage from "./js/pages/ProfilePage.js";
import SettingPage from "./js/pages/SettingPage.js";
import TournamentPage from "./js/pages/TournamentPage.js";
import NotfoundPage from "./js/pages/NotfoundPage.js";

Object.defineProperty(window, "ft_transcendence_host", {
  value: "localhost",
  writable: false,
});

window.addEventListener("DOMContentLoaded", () => {
  router.init();
});
