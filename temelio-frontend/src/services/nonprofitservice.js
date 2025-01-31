import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/nonprofits';

export const createNonprofit = async (nonprofit) => {
  return await axios.post(BASE_URL, nonprofit);
};

export const getNonprofits = async () => {
    return await axios.get(BASE_URL);
};

export const updateNonprofit = async (nonprofit) => {
  return await axios.put(BASE_URL, nonprofit);
};

export const deleteNonprofit = async(nonprofit) => {
  return await axios.delete(BASE_URL, nonprofit);
};
