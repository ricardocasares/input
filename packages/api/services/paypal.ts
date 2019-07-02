import axios from "axios";
import { PAYPAL_URL, PAYPAL_CLIENT, PAYPAL_SECRET } from "../constants";

export const paypal = axios.create({
  baseURL: PAYPAL_URL,
  auth: {
    username: PAYPAL_CLIENT,
    password: PAYPAL_SECRET
  },
  headers: {
    accept: "application/json",
    "content-type": "application/json"
  }
});
