import axios from 'axios';

const api = axios.create({
  baseURL: 'https://likho-daily-blogging-app.vercel.app' ,
});

export default api;