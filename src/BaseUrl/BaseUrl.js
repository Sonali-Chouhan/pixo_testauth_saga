import axios from 'axios';
const instance = axios.create({
  baseURL:process.env.REACT_APP_API_KEY,
  headers: { 
    // Corrected property name to 'headers'
    "Content-Type": "application/json",
  },
});
export default instance;
