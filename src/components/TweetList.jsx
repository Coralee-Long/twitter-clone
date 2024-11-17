import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <>
      <div className="container">
        <ul>
          {tweets.map((tweet, index) => {
            <li>
              <Tweet key={index} tweetContent={tweet}></Tweet>;
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default TweetList;
