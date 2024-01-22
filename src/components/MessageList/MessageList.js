import React from "react";
import { useSelector } from "react-redux";
import MessageCard from "../MessageCard";

import "./MessageList.scss";

const MessageList = () => {
  const allMessages = useSelector((s) => s?.messageBoard?.allMessages);

  return (
    <div className="message-list">
      {!allMessages?.length ?
      <div> No Messages! Post new messages to view  </div> :
      allMessages?.map((message) => (
        <MessageCard
          {...message}
          key={message.id}
          variant="message"
        ></MessageCard>
      ))}
    </div>
  );
};

export default MessageList;
