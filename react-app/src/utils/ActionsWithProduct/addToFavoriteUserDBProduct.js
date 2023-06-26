import {sendRequest} from "../../tools/sendRequest.js";

export const addToFavoriteUserDBProduct = async (userId, productID) => {
    try {
        const favoriteURL= `http://localhost:3004/api/favorite?user=${userId}`;
        const favoriteResponse = await sendRequest(favoriteURL);
        const favoriteProducts = favoriteResponse.data[0].products;
        const newFavorites = [...new Set([...favoriteProducts, productID])];
        const newFavoriteData = { id: favoriteResponse.data[0].id, products: [...newFavorites] };
        const favoriteULRForPUT = 'http://localhost:3004/api/favorite';
        const favoritePUTResponse = await sendRequest(favoriteULRForPUT, 'PUT', newFavoriteData);

        if (!favoriteResponse.statusText && !favoritePUTResponse.statusText) {
            throw new Error('Network response was not ok');
        }
    } catch (err) {
        console.error('Error fetching products:', err);
    }
}