import axios from "axios";
import { SECRET, HASURA_URL, REQ_HASURA_HEADER } from "../constants";

export const hasura = axios.create({
  baseURL: HASURA_URL,
  headers: {
    accept: "application/json",
    [REQ_HASURA_HEADER]: SECRET
  }
});

hasura.interceptors.response.use(data => data.data);
