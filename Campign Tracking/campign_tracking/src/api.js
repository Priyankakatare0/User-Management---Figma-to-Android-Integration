// src/api.js
import axios from "axios";

const API_BASE = "https://api-domain.com"; // Replace with actual domain

export const fetchCampaigns = async () => {
  const res = await axios.get(`${API_BASE}/api/v1/campaigns`);
  return res.data;
};

export const createCampaign = async (source) => {
  const res = await axios.post(`${API_BASE}/api/v1/campaigns`, {
    source,
  });
  return res.data;
};
