import { api } from "@/libs/api";
import { IUser } from "@/type/userd";
import { LoginSchema } from "@/validations/loginSchema";
import { RegisterSchema } from "@/validations/registerSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const registerAsync = createAsyncThunk<void, RegisterSchema>(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/auth/register", data);
      console.log(res.data);

      toast.success("Register Success !");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const loginAsync = createAsyncThunk<string, LoginSchema>(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      return res.data.token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const checkAuth = createAsyncThunk<
  {
    user: IUser;
    token: string;
  },
  undefined
>("auth/checkAuth", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return thunkAPI.rejectWithValue("");
    }
    const res = await api.get("/auth/profile");

    if (!res.data) {
      return thunkAPI.rejectWithValue("Not a user");
    }
    console.log("data user", res.data);
    return {
      user: res.data,
      token: token,
    };
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
