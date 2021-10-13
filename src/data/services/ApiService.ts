import axios from 'axios';

const URL = 'http://ediaristas-workshop.herokuapp.com'

export const ApiService = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
    },
});