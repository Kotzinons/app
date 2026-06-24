import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_BASE = `${BACKEND_URL}/api`;

const api = axios.create({
  baseURL: API_BASE,
  timeout: 20000,
});

export const fetchCharacters = async () => {
  const { data } = await api.get("/characters");
  return data;
};

export const fetchCharacter = async (slug) => {
  const { data } = await api.get(`/characters/${slug}`);
  return data;
};

export const fetchTeam = async () => {
  const { data } = await api.get("/team");
  return data;
};

export const fetchGallery = async (category) => {
  const params = category && category !== "all" ? { category } : {};
  const { data } = await api.get("/gallery", { params });
  return data;
};

export const fetchVideos = async () => {
  const { data } = await api.get("/videos");
  return data;
};

export const fetchStats = async () => {
  const { data } = await api.get("/stats");
  return data;
};

export const submitContact = async (payload) => {
  const { data } = await api.post("/contact", payload);
  return data;
};

export const subscribeNewsletter = async (email) => {
  const { data } = await api.post("/newsletter", { email });
  return data;
};

export default api;
