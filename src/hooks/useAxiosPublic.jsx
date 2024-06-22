import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://assignment-server-nine-gray.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
