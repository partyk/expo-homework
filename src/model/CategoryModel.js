import axios from 'axios/dist/axios';

// schema api https://app.apiary.io/emiminosoukrome/editor
const apiUrl = 'https://api.emimino.cz/v2/';

export default {
    test: () => {
        console.log('xxx');
    },
    getCategories: () => {
        return axios(apiUrl + 'adscategories/');
    }
};