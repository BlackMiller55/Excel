import axios from "axios";

const base = import.meta.env.VITE_APP_BASE;
const api = import.meta.env.VITE_APP_BASE_API;

const BASE_URL = base + api;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});
