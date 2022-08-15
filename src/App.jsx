import "./assets/img/logo.png";
import Navbar from "./components/Navbar/Navbar";
import "./assets/style/App.css";
import SearchItem from "./components/SearchItem/SearchItem";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  //in about section, add your pic that you took when you were learning redux in shop,
  //say about yourself like : "hello I'm saran pariyar, I made this websie for my vegetable shop,I'm a commerce student and self taught programmer and anything is possible"
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SearchItem />
    </div>
  );
}

export default App;
