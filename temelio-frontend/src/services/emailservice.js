import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/emails';

export const sendBulkEmails = async (emailBody) => {
    return await axios.post(BASE_URL + '/send', emailBody);
};

export const getEmails = async () => {
    return await axios.get(BASE_URL + '/fetch');
};

export const sendEmailToNonprofit = async (emailBody) => {
    return await axios.post(BASE_URL + '/nonprofit', emailBody);
};
