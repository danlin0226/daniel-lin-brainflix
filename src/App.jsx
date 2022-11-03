import Header from "./components/header/Header";
import MainVideo from "./components/main-video/MainVideo";
import MainVideoTitle from "./components/main-video-title/MainVideoTitle";
import "./styles/main.scss";
import MainVideoStats from "./components/main-video-stats/MainVideoStats";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="video-section">
          <MainVideo />
          <MainVideoTitle />
          <MainVideoStats />
        </section>
        <section className="comments-section"></section>
      </main>
    </>
  );
}

export default App;
