import Table from '../models/Table.js';

export const getSinglePost = async (request, response) => {
    const data = await Table.create({String: "slug"});
    console.log(data);
    return data;
}