import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {/* Message Sender */}
    </div>
  );
}

export default Feed;
