import React from "react";
import usePostMessageSection from "./usePostMessageSection";
import "./PostMessageSection.scss";

const PostMessageSection = ({variant, messageId, setShowReplyBox}) => {
  const {
    textMessage,
    handleTextChange,
    handlePostClick,
    handleKeyDown,
  } = usePostMessageSection(variant, messageId, setShowReplyBox);

  return (
    <div className={`post-message-section ${variant}`} >
        <input value={textMessage} onChange={handleTextChange} className="input-message" onKeyDown={handleKeyDown}></input>
        <button onClick={handlePostClick} className="send-button">
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/small/16/filled-sent.png"
            alt="filled-sent"
          />
        </button>
    </div>
  );
};

export default PostMessageSection;
