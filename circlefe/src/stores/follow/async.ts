import { api } from "@/libs/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk for following/unfollowing a user
export const createFollow = createAsyncThunk(
  "follow/createFollow",
  async (followingId: number, { rejectWithValue }) => {
    try {
      const response = await api.post("/follow", { followingId });
      return response.data.message;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Error following user"
      );
    }
  }
);

// Thunk for checking if the user is followed
export const checkFollow = createAsyncThunk(
  "follow/checkFollow",
  async (followingId: number, { rejectWithValue }) => {
    try {
      const response = await api.get(`/follow/${followingId}`);
      return response.data.isFollowing;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Error checking follow status"
      );
    }
  }
);

interface FollowState {
  isFollowing: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
}

const initialState: FollowState = {
  isFollowing: false,
  status: "idle",
  message: null,
};

export const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFollow.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createFollow.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        state.isFollowing = !state.isFollowing;
      })
      .addCase(createFollow.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload as string;
      })
      .addCase(checkFollow.fulfilled, (state, action) => {
        state.isFollowing = action.payload;
      });
  },
});

export const { resetMessage } = followSlice.actions;
export default followSlice.reducer;
