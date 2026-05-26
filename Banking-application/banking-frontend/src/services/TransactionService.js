import axios from "axios";

const BASE_URL =
    "http://localhost:8080/api/transactions";

export const getTransactionsByAccountId = (accountId) => {
    return axios.get(
        `${BASE_URL}/${accountId}`
    );
};