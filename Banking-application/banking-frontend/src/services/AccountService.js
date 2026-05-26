import axios from "axios";

const BASE_URL = "http://localhost:8080/api/accounts";

export const getAllAccounts = () => {
    return axios.get(BASE_URL);
};

export const deleteAccount = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};

export const getAccountById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

export const updateAccount = (id, account) => {
    return axios.put(`${BASE_URL}/${id}`, account);
};


export const depositMoney = (id, amount) => {
    return axios.put(
        `${BASE_URL}/${id}/deposit`,
        { amount }
    );
};