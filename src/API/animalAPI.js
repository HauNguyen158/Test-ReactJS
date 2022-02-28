import axiosClient from "./axiosClient";

const animalAPI = {
  getAll: (params) => {
    const url = '/animal';
    return axiosClient.get(url, { params });
  },
}

export default animalAPI; 