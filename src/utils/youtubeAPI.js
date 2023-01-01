import axios from "axios";

const API_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: API_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const youtubeAPI = async (url) => {
  const { data } = await axios.get(`${API_URL}/${url}`, options);

  return data;
};
