import axios from "axios";

const API = "http://localhost:5000/api/pg";

// Get all PGs
export const getAllPGs = async () => {
  const response = await axios.get(API);
  return response.data;
};

// Get single PG
export const getSinglePG = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};

export const deletePG = async (id) => {
  const response = await axios.delete(
    `${API}/${id}`
  );}
// ✅ Update PG
export const updatePG = async (id, pgData) => {
  const response = await axios.put(
    `${API}/${id}`,
    pgData
  );

  return response.data;
};
export const createPG = async (pgData) => {
  const response = await axios.post(API, pgData);
  return response.data;
};