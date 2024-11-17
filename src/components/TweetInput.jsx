import { useState } from "react";
import "../styles/tweet-input.css";
import tweetIcons from "../utils/tweet-icons.json";
import Avatar from "./Avatar";
import UserAvatar from "../assets/uifaces-popular-image.jpg";
import Icon from "./Icon";

console.log("tweetIcons", tweetIcons);

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet(tweet);
    setTweet("");
  };

  return (
    <>
      <div className="tweet-input-container">
        <div className="left-section-tweet">
          <Avatar src={UserAvatar} />
        </div>
        <div className="right-section-tweet">
          <div className="top-section-tweet">
            <form onSubmit={handleSubmit}>
              <input
                className="input-field"
                type="text"
                placeholder="What is happening?!"
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
              />
            </form>
          </div>

          <div className="bottom-section-tweet">
            <ul className="tweet-icons-list">
              {tweetIcons?.map((icon) => (
                <li key={icon.name} className="tweet-icon">
                  <Icon path={icon.path} size={22} label={icon.name} />
                </li>
              ))}
            </ul>

            <button type="submit" className="post-button">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetInput;
