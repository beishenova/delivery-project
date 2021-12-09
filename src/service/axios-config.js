import axios from "axios";

export const $api = axios.create({
   baseURL: process.env.REACT_APP_PARSELS_URL,
 });
 
 export const $workapi = axios.create({
   workURL : process.env.REACT_APP_WORK_URL,
 })