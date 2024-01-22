import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewMessage, addNewReply } from "../../redux/reducers";

const usePostMessageSection = (variant, messageId, setShowReplyBox) => {
  const dispatch = useDispatch();
  const [textMessage, setTextMessage] = useState("");
  const handleTextChange = (event) => {
    setTextMessage(event.target.value);
  };

  const generateCurrentDate = () => {
    const currentDate = new Date().toLocaleString();
    return currentDate;
  }

  const generateMessage = () => {
      return {
        id: Math.floor(Math.random() * 100000) + 1,
        text: textMessage,
        source: 'Sai Kiran',
        timestamp: generateCurrentDate(),
      }
  }

  const handlePostClick = () => {
    textMessage && dispatch(variant === "reply" ? addNewReply({messageId, reply: generateMessage() }) : addNewMessage(generateMessage()));
    setTextMessage("");
    variant === "reply" && setShowReplyBox(false);
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter')
    {
      handlePostClick();
    }
  };

  return {
    textMessage,
    handleTextChange,
    handlePostClick,
    handleKeyDown,
  };
};

export default usePostMessageSection;
