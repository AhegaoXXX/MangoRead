import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../shared/API/API";
import { infoAccount, AccountLogOut } from "../signUpSlice";

const { apiAuthProfile, apiAuthLogout } = API;

export const getAccount = createAsyncThunk(
  "getLogin",
  async (logUser, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${apiAuthProfile}?limit=-1&offset=0`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const foundAccount = response?.data.find(
        (info) => info.username === logUser
      );
      dispatch(infoAccount(foundAccount));
    } catch (error) {
      console.error(error);
    }
  }
);
export const logOutAcc = createAsyncThunk(
  "logOutAcc",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await axios.post(`${apiAuthLogout}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenA"))}`,
        },
        body: data,
      });
      dispatch(AccountLogOut());
    } catch (error) {
      console.error(error);
    }
  }
);
