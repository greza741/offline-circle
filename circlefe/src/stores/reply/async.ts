import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "@/libs/api";
import { IReply, IThread } from "@/type/thread";

interface ThreadState {
  replies: IThread[];
  replyCount: number;
}

const initialState: ThreadState = {
  replies: [],
  replyCount: 0,
};

export const createReply = createAsyncThunk(
  "threads/createReply",
  async (replyData: IReply) => {
    const response = await api.post<IThread>("/threads/reply", replyData);
    return response.data;
  }
);

export const getReplies = createAsyncThunk(
  "threads/getReplies",
  async (threadId: number) => {
    const response = await api.get<IThread[]>(`/threads/replies/${threadId}`);

    return response.data;
  }
);

export const replyCount = createAsyncThunk(
  "threads/replyCount",
  async (threadId: number) => {
    const response = await api.get<number>(`/threads/check/${threadId}`);
    console.log("checkmasuk", response.data);

    return response.data;
  }
);

const replySlice = createSlice({
  name: "threads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createReply.fulfilled,
      (state, action: PayloadAction<IThread>) => {
        state.replies.push(action.payload);
      }
    );

    builder.addCase(getReplies.fulfilled, (state, action) => {
      state.replies = action.payload;
    });

    builder.addCase(replyCount.fulfilled, (state, action) => {
      state.replyCount = action.payload;
    });
  },
});

export default replySlice.reducer;
