import { MainContainer } from "./App.styled";
import Coins from "./components/Coins/Coins";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Squad from "./components/Squad/Squad";
import Video from "./components/Video/Video";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <MainContainer>
      <Header />
      <Welcome />
      <Video />
      <Info />
      <Features />
      <Squad />
      <Coins />
      <Footer />
    </MainContainer>
  );
}

export default App;
