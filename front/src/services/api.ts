import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.example.com",
    timeout: 5000,
});
