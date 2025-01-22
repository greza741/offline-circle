import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchUsersAsync, getAllUsersAsync } from "./async";

interface UserProfile {
  fullname: string;
  bio?: string;
}

interface User {
  id: number;
  email: string;
  username: string;
  profile: UserProfile;
}

interface UserState {
  users: User[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Search Users
      .addCase(searchUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        searchUsersAsync.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.loading = false;
          state.users = action.payload; // Update users with search results
        }
      )
      .addCase(searchUsersAsync.rejected, (state) => {
        state.loading = false;
      })

      // Get All Users
      .addCase(getAllUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllUsersAsync.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.loading = false;
          state.users = action.payload; // Update users with all users list
        }
      )
      .addCase(getAllUsersAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
