import { api } from "@/libs/api";
import { IThread } from "@/type/thread";
import { CreateThreadDTO } from "@/validations/threadSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getFeed = createAsyncThunk(
  "thread/getThread",
  async (take: number, ThunkAPI) => {
    try {
      const res = await api.get("/threads/feed" + `?take=${take}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return ThunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const createThread = createAsyncThunk<void, CreateThreadDTO>(
  "thread/createThread",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "images" && value instanceof FileList) {
          Array.from(value).forEach((file) => {
            formData.append("images", file);
          });
        } else {
          formData.append(key, value);
        }
      });
      const res = await api.post("/threads/create", formData);
      console.log(res.data);
      toast.success("Thread Created");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const getDetailThread = createAsyncThunk<IThread, string>(
  "thread/getThreadDetail",
  async (threadId: string, thunkAPI) => {
    try {
      const res = await api.get(`/thread/detail/${threadId}`);

      return res.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
