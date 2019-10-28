import axios from 'axios';

import { config } from '../constants';

const instance = axios.create({
  baseURL: 'https://randomuser.me/'
});

export default instance;
