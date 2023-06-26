import axios from "axios";

import { SIGN_IN, SIGN_OUT, SIGN_UP } from "./authTypes";

export const signin = (userData) => async (dispatch) => {
  try {
    const user = await axios({
      url: "http://localhost:4000/codeslayer/auth/signin",
      method: "POST",
      data: userData,
    });

    localStorage.setItem("codeslayerUser", JSON.stringify(user.data.token));

    return dispatch({ type: SIGN_IN, payload: user });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signup = (userData) => async (dispatch) => {
    try {
      const user = await axios({
        url: "http://localhost:4000/codeslayer/auth/signup",
        method: "POST",
        data: userData,
      });
  
      localStorage.setItem("codeslayerUser", JSON.stringify(user.data.token));
  
      return dispatch({ type: SIGN_UP, payload: user });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

  export const signout = () => async (dispatch) => {
    try {
  
      localStorage.removeItem("codeslayerUser");
  
      return dispatch({ type: SIGN_OUT, payload: {} });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };