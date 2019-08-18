import axios from "axios";
require("dotenv").config();
const API_KEY = process.env.API_DOTA_KEY;

export default function getHeroes() {
  return axios.get(`https://api.opendota.com/api/heroes?api_key=${API_KEY}`);
}
