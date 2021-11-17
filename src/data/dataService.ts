import axios from "axios";

export const dataService = axios.create({
  baseURL: "https://pinguintest.atlassian.net/rest/api/2/",
});
