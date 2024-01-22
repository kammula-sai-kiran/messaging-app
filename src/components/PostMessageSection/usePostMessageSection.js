import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewMessage, addNewReply } from "../../redux/reducers";

const usePostMessageSection = (variant, messageId, setShowReplyBox) => {
  const dispatch = useDispatch();
  const [textMessage, setTextMessage] = useState("");
  const handleTextChange = (event) => {
    setTextMessage(event.target.value);
  };

  // Function that returns current date and time in readble format
  const generateCurrentDate = () => {
    const currentDate = new Date().toLocaleString();
    return currentDate;
  }

  // Funtion that genrates the message object to be stored in redux store
  const generateMessage = () => {
      return {
        id: Math.floor(Math.random() * 100000) + 1,
        text: textMessage,
        source: 'Sai Kiran',
        timestamp: generateCurrentDate(),
      }
  }

  // Function that handles the send functinlaity for messages and replies
  const handlePostClick = () => {
    textMessage && dispatch(variant === "reply" ? addNewReply({messageId, reply: generateMessage() }) : addNewMessage(generateMessage()));
    setTextMessage("");
    variant === "reply" && setShowReplyBox(false);
  };

  // Fucntion that handles enter press for messages and replies
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
