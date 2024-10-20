import { IThread } from "@/type/thread";
import { createSlice } from "@reduxjs/toolkit";
import { cases } from "./cases";

export interface ThreadState {
  threads: IThread[];
  loading: boolean;
  thread?: IThread;
}

const initialState: ThreadState = {
  threads: [],
  thread: undefined,
  loading: false,
};

const threadSlice = createSlice({
  name: "thread",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    cases(builder);
  },
});

export default threadSlice.reducer;
