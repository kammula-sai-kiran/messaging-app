import { createSlice } from "@reduxjs/toolkit";

const messagingAppSlice = createSlice({
  name: "messagingApp",
  initialState: {
    allMessages: [],
  },
  reducers: {
    setAllMessages: (state, action) => {
      state.allMessages = action.payload;
    },
    addNewMessage: (state, action) => {
      state.allMessages = [...state.allMessages, action.payload ]
    },
    deleteMessage: (state, action) => {
      const requiredMessage = state.allMessages?.filter(message => message?.id !== action.payload);
      state.allMessages = requiredMessage;
    },
    deleteReply: (state, action) => {
      const requiredMessage =  state.allMessages.find(message => message.id === action.payload?.parentId);
      const requiredReplies = requiredMessage?.children?.filter(reply => reply?.id !== action.payload?.id)
      requiredMessage.children = requiredReplies;
    },
    addNewReply: (state, action) => {
      const {messageId, reply} = action.payload;
      const requiredMessage =  state.allMessages.find(message => message.id === messageId);
      requiredMessage?.children?.length ? requiredMessage.children.push(reply) : requiredMessage.children = [reply]

    },
  },
});

export const {
    setAllMessages,
    addNewMessage,
    addNewReply,
    deleteMessage,
    deleteReply,
} = messagingAppSlice.actions;
export default messagingAppSlice.reducer;
