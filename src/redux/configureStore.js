import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetings';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
