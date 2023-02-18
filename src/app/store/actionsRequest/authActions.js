import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../shared/API/API";
import { infoAccount, AccountLogOut } from "../signUpSlice";
import swal from "sweetalert";

const { apiAuthProfile, apiAuthLogout, apiSignUp, apiSignIn } = API;

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

export const postRegisterAccount = createAsyncThunk(
  "postRegisterAccount",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await axios({
        method: "POST",
        url: `${apiSignUp}`,
        headers: { "Content-type": "multipart/form-data" },
        data: data,
      }).then(() => {
        swal({
          title: "Success:",
          text: "You are registered successfully!",
          icon: "success",
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
);

export const postLoginAccount = createAsyncThunk(
  "postLoginAccount",
  async (data, { rejectWithValue, dispatch }) => {
    const { formData, logUser } = data;
    try {
      await axios({
        method: "POST",
        url: `${apiSignIn}`,
        headers: { "Content-type": "application/json" },
        data: formData,
      }).then((response) => {
        localStorage.setItem("tokenA", JSON.stringify(response.data.access));
        localStorage.setItem("tokenR", JSON.stringify(response.data.refresh));
        dispatch(getAccount(logUser));

        swal({
          title: "Success:",
          text: "You are logged in successfully!",
          icon: "success",
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
);
