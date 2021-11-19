import axios from "axios";

export const dataService = axios.create({
  headers: {
    user: "mahmoodsagharjooghi@gmail.com:439auiocLwpMUv934PW99103",
  },
  baseURL: "https://story-roadmap.atlassian.net/rest/api/2/",
});
