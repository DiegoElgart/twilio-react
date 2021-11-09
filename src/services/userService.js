/* eslint-disable import/no-anonymous-default-export */

import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

function getJwt() {
  return sessionStorage.getItem(tokenKey);
}

function logout() {
  sessionStorage.removeItem(tokenKey);
}

function getCurrentUser() {
  try {
    const jwt = sessionStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/auth/signin`, {
    email,
    password,
  });
  sessionStorage.setItem(tokenKey, data.token);
  return data.token;
}

async function getUserData(id) {
  const userObj = await http.get(`${apiUrl}/user/${id}`);
  return userObj;
}

export default { login, getCurrentUser, logout, getJwt: getJwt, getUserData };
