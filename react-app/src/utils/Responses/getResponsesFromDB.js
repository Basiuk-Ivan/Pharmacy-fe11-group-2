import {sendRequest} from "../../tools/sendRequest.js";


export const getResponsesFromDB = async () => {
    try {
        const url = `${process.env.VITE_API_URL}/api/response`;
        const getResponses = await sendRequest(url);
        // if (!createReviewResponse.statusText) {
        //   throw new Error('Network response was not ok');
        // }

        return getResponses;
    } catch (err) {
        console.error('Error fetching products:', err);
    }
};