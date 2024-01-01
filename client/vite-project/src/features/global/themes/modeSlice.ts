// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: localStorage.getItem('mode') || 'light',
};


const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('mode', state.mode);
    },
    
  }
})


export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
