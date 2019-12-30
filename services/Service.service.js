import { server } from "../util/Env.util";
import axios from 'axios';

export function returnServices() {
    return axios.get(`${server}/services`);
  }