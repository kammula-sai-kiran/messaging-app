import React from "react";
import useMessageCard from "./useMessageCard";
import "./MessageCard.scss";
import PostMessageSection from "../PostMessageSection/PostMessageSection";

const MessageCard = (props) => {
  const { id, text, source, timestamp, children, variant, parentId } = props;
  const { showReplyBox, setShowReplyBox, handleMessageDelete } =
    useMessageCard(variant);

  return (
    <div className={variant}>
      <div className="message-data">
        <div className="message-metadata">
          <div className="source">{source}</div>
          <div className="date">{timestamp}</div>
          <button className="delete" onClick={() => handleMessageDelete(id, parentId)}>
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/metro/26/FA5252/delete.png"
              alt="delete"
            />
          </button>
        </div>
        <div className="message-text">{text}</div>
        <div className="message-replies">
          {children?.map((reply) => (
            <MessageCard {...reply} key={reply.id} variant="reply" parentId={id}/>
          ))}
        </div>
        {!(variant === "reply") && !showReplyBox && (
          <button
            onClick={() => setShowReplyBox(true)}
            className="reply-button"
          >
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/material-sharp/24/0000FF/reply-arrow.png"
              alt="reply-arrow"
            />
            reply
          </button>
        )}
        {showReplyBox && (
          <PostMessageSection
            variant="reply"
            messageId={id}
            setShowReplyBox={setShowReplyBox}
          />
        )}
      </div>
    </div>
  );
};

export default MessageCard;
