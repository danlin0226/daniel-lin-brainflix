import Header from "./components/header/Header";
import MainVideo from "./components/main-video/MainVideo";
import MainVideoTitle from "./components/main-video-title/MainVideoTitle";
import "./styles/main.scss";
import MainVideoStats from "./components/main-video-stats/MainVideoStats";
import MainVideoDescription from "./components/main-video-description/MainVideoDescription";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="video-section">
          <MainVideo />
          <MainVideoTitle />
          <MainVideoStats />
          <MainVideoDescription />
        </section>
        <section className="comments-section"></section>
        <section className="next-video-section"></section>
      </main>
    </>
  );
}

export default App;
