import axios from "axios";

const API =  "https://stayfinder-bjfm.onrender.com/api/pg";

// Submit Request
export const submitRequest = async (data) => {
  const response = await axios.post(API, data);
  return response.data;
};

// Get All Requests
export const getAllRequests = async () => {
  const response = await axios.get(API);
  return response.data;
};

// Approve Request
export const approveRequest = async (id) => {
  const response = await axios.post(
    `${API}/approve/${id}`
  );

  return response.data;
};

// Reject Request
export const rejectRequest = async (id) => {
  const response = await axios.delete(
    `${API}/reject/${id}`
  );

  return response.data;
};