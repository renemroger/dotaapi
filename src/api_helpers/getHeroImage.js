import axios from "axios";

export default function getHeroImage(name) {
  return axios.get(`http://cdn.dota2.com/apps/dota2/images/heroes/${name}`);
}
