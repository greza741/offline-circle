import { api } from "@/libs/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Search Users
export const searchUsersAsync = createAsyncThunk(
  "users/searchUsers",
  async (query: string, thunkAPI) => {
    try {
      const response = await api.get(`/user/search`, { params: { q: query } });
      return response.data;
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error("Failed to search users");
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

// Get All Users
export const getAllUsersAsync = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/user/users`);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error("Failed to load users");
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
