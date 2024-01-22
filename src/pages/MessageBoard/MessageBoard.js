import React from "react";
import PostMessageSection from "../../components/PostMessageSection/PostMessageSection";
import MessageList from "../../components/MessageList/MessageList";
import "./MessageBoard.scss";

const MessageBoard = () => {

  return (
    <div className="message-board">
      <h1 className="title" >Message Board</h1>
      <MessageList></MessageList>
      <PostMessageSection ></PostMessageSection>
    </div>
  );
};

export default MessageBoard;
