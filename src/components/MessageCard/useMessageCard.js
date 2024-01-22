import { useState } from 'react';
import { deleteMessage, deleteReply } from '../../redux/reducers';
import { useDispatch } from 'react-redux';

const useMessageCard = (variant) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const dispatch = useDispatch();


  // Function that dispatches an action to delete a message 
  const handleMessageDelete = (id, parentId) => {
    dispatch(variant === "message" ? deleteMessage(id) : deleteReply({id, parentId}) )
  }

  return {
    showReplyBox,
    setShowReplyBox,
    handleMessageDelete,
  };
};

export default useMessageCard;
