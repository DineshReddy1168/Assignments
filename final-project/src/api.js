import axios from 'axios';

const BASE_URL = 'https://crudcrud.com/api/9f0bf4c2c4b14e5ea2e6ef36df589bcb/employees'; 

export const getRecords = () => axios.get(BASE_URL);
export const addRecord = (data) => axios.post(BASE_URL, data);
export const updateRecord = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteRecord = (id) => axios.delete(`${BASE_URL}/${id}`);
