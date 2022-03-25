import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: '',
  },
  reducers: {
    userAdded(state, action) {
      state.user = action.payload;
    },
  },
});

export const { userAdded } = loginSlice.actions;

export default loginSlice.reducer;
