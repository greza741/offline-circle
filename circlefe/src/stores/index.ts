import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import authReducer from "./auth/slice";
import threadReducer from "./thread/slice";
import { followSlice } from "./follow/async";
import { userSlice } from "./user/slice";
import replySlice from "./reply/async";

const store = configureStore({
  reducer: {
    thread: threadReducer,
    auth: authReducer,
    follow: followSlice.reducer,
    user: userSlice.reducer,
    reply: replySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
