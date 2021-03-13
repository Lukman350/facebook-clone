import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://avatars.githubusercontent.com/u/61648308?s=400&u=56e1b98852b8d4c6309d59a4d056cb72fe327f44&v=4"
        message="This works!"
        timestamp="This is timestamp"
        username="Lukman"
        image="https://avatars.githubusercontent.com/u/61648308?s=400&u=56e1b98852b8d4c6309d59a4d056cb72fe327f44&v=4"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
