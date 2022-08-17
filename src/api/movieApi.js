import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
  people: "people",
  trending: "trending",
  similar: "similar",
  discovery: "discovery",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
  trending: "trending",
  discovery: "discovery",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
  airing_today: "airing_today",
};
export const mediaType = {
  all: "all",
  movie: "movie",
  tv: "tv",
  person: "person",
};
export const timeWidow = {
  day: "day",
  week: "week",
};

const movieApi = {
  getMovieList: (type, params) => {
    const url = `movie/${movieType[type]}`;
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = `tv/${tvType[type]}`;
    return axiosClient.get(url, params);
  },
  getPeople: (type, params) => {
    const url = `/person/${tvType[type]}`;
    return axiosClient.get(url, params);
  },
  getMoviesTrending: (media, time, params) => {
    const url = `/trending/${mediaType[media]}/${timeWidow[time]}`;
    return axiosClient.get(url, params);
  },
  getSearch: (cate, params) => {
    const url = `search/${category[cate]}/`;
    return axiosClient.get(url, params);
  },
  getPlayNow: (type, params) => {
    const url = `/${category[type]}/now_playing`;
    return axiosClient.get(url, params);
  },
  getDiscovery: (type, params) => {
    const url = `/discover/${category[type]}`;
    return axiosClient.get(url, params);
  },
  getSimilar: (type, id, params) => {
    const url = `/${category[type]}/${id}/similar`;
    return axiosClient.get(url, params);
  },
  getDetail: (type, id, params) => {
    const url = `/${category[type]}/${id}`;
    return axiosClient.get(url, params);
  },
  getCasts: (type, id, params) => {
    const url = `/${category[type]}/${id}/credits`;
    return axiosClient.get(url, params);
  },
  getVideos: (type, id, params) => {
    const url = `/${category[type]}/${id}/videos`;
    return axiosClient.get(url, params);
  },
};
export default movieApi;
