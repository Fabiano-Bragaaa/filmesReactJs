import axios from "axios";

//base url: https://api.themoviedb.org/3/
//url: movie/now_playing?api_key=f662cbc19721ae47aa6569b03517d367

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
