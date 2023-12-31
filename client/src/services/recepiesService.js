import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/recepies";

export const getAllRecepies = async () => {
    const result = await request.get(baseUrl);

    return result;
}

export const getAllMyRecepies = async (userId) => {
    
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const getOne = async (recepieId) => {
    const result = await request.get(`${baseUrl}/${recepieId}`);

    return result;
}

export const recepieCreate = async (recepieData) => {
    const result = await request.post(baseUrl, recepieData);

    return result;
}

export const recepieEdit = async (recepieId, recepieData) => {
    const result = await request.put(`${baseUrl}/${recepieId}`, recepieData);

    return result;
}

export const removeRecepie = async (recepieId) => {
    await request.remove(`${baseUrl}/${recepieId}`);
}