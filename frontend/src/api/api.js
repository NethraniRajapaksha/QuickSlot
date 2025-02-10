import axios from "axios";

const API_URL = "http://localhost:5000";

export const getSlots = async () => axios.get(`${API_URL}/slots`);
export const bookAppointment = async (appointment) => axios.post(`${API_URL}/appointments`, appointment);
export const getAppointments = async () => axios.get(`${API_URL}/appointments`);
export const cancelAppointment = async (id) => axios.delete(`${API_URL}/appointments/${id}`);
