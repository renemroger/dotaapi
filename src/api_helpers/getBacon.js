import axios from "axios";

export default function getBacon() {
  return axios.get("https://baconipsum.com/api/?type=meat-and-filler");
}
