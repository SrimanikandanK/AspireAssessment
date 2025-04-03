import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
export const usersReceivedData = (state) => state.users.list || []; // Safe selector
