import React from "react";
import axios from 'axios';
jest.mock('axios');
const isReachable = require('is-reachable');
const baseURL ='http://localhost:8083'

describe('Test on requests', () => {
    it('Should connect', async () => {
        const reachable = await isReachable(baseURL)
        expect(reachable).toBe(true)

    });

    /*
    it('Should get correct pageCount', async () => {
        const data = {pageCount: 1}
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const value = await axios.get(baseURL)
        expect(value).toEqual(data).rejects.toThrow();

    });*/

    it('Should get correct pageCount', async () => {
        const data = {pageCount: 1}
        axios.get.mockResolvedValueOnce(data);

        const result = await axios.get(baseURL)

        expect(axios.get).toHaveBeenCalledWith(baseURL);
        expect(result).toEqual(data);
    });

    it('Should reject the request', async () => {
        const message = "error"
        axios.get.mockRejectedValueOnce(new Error(message));

        const result = await axios.get(baseURL).catch(error => 'error')

        expect(axios.get).toHaveBeenCalledWith(baseURL);
        expect(result).toEqual('error');
    });
});

