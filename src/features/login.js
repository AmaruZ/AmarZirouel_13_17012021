import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {selectLogin} from "../utils/selectors";

const initialState = {
  status: "void",
  isLogged: false,
  token: "",
  error: null
};

export function signIn(username, password) {
  return async (dispatch, getState) => {
    const status = selectLogin(getState()).status;
    if (status === "pending" || status === "updating") 
      return;
    dispatch(actions.fetching());
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/login", {
        email: username,
        password: password
      });
      const data = await response.data;
      dispatch(actions.resolved(data));
    } catch (error) {
      dispatch(actions.rejected(error.toString()));
    }
  };
}

const {actions, reducer} = createSlice({
  name: "login",
  initialState,
  reducers: {
    fetching: draft => {
      switch (draft.status) {
        default:
          return;
        case "void":
          draft.status = "pending";
          return;
        case "rejected":
          {
            draft.error = null;
            draft.status = "pending";
            return;
          }
        case "resolved":
          draft.status = "updating";
          return;
      }
    },
    resolved: (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.isLogged = true;
        draft.token = action.payload.body.token;
        draft.status = "resolved";
        return;
      }
      return;
    },
    rejected: (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.status = "rejected";
        draft.error = action.payload;
        return;
      }
      return;
    }
  }
});

export default reducer;
