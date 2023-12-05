import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/recepies";

export const getAllRecepies = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export const getOne = async (recepieId) => {
    const result = await request.get(`${baseUrl}/${recepieId}`);

    return result;
}

export const recepieCreate = async (recepieData) => {
    const result = await request.post(baseUrl, recepieData);

    return result;
}