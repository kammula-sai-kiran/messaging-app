import { configureStore } from '@reduxjs/toolkit';
import messagingAppReducer from './reducers';

const store = configureStore({
  reducer: {
    messagingApp: messagingAppReducer,
  },
});

export default store;
