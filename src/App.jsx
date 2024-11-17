import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./layout/Header";
import TweetInput from "./components/TweetInput";
import TweetList from "./components/TweetList";

function App() {
  const [tweets, setTweets] = useState([]);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  console.log("App mounting");

  return (
    <>
      <Header />
      <main role="main" className="main-container">
        <TweetInput addTweet={addTweet}></TweetInput>

        <TweetList tweets={tweets}></TweetList>
      </main>
    </>
  );
}

export default App;
