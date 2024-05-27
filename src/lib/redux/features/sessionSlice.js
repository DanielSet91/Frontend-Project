import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: null,
  status: "unauthenticated",
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.session = action.payload;
      state.status = action.payload ? "authenticated" : "unauthenticated";
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setSession, setStatus } = sessionSlice.actions;
export default sessionSlice.reducer;
