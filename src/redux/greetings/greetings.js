import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreeting = createAsyncThunk(
  'greeting/getGreeting',
  async () => {
    const greetingLive = await axios.get('http://localhost:3000/api/greeting');
    return greetingLive.data;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.message = action.payload;
      });
  },
});

export const { } = greetingSlice.actions;
export default greetingSlice.reducer;