import Header from "./components/header/Header";
import MainVideo from "./components/main-video/MainVideo";
import MainVideoTitle from "./components/main-video-title/MainVideoTitle";
import "./styles/main.scss";
import "./App.scss";

import MainVideoStats from "./components/main-video-stats/MainVideoStats";
import MainVideoDescription from "./components/main-video-description/MainVideoDescription";
import CommentForm from "./components/comment-form/CommentForm";
import CommentList from "./components/comment-list/CommentList";

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
        <section className="comments-section">
          <div className="comment-counter">3 comments</div>
          <CommentForm />
          <CommentList />
        </section>
        <section className="next-video-section"></section>
      </main>
    </>
  );
}

export default App;
