import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import MainVideoTitle from "./components/MainVideoTitle/MainVideoTitle";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainVideo />
        <MainVideoTitle />
      </main>
    </>
  );
}

export default App;
