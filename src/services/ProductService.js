import axios from 'axios';
const Config = require('../assets/util/config');


const ProductServices = {
    getProducts: async (searchValue) => {
        try {
            const productResponse = await axios.get(`${Config.URL_API}/items`, { params: { q: searchValue } });
            return productResponse.data;
        } catch (error) {
            return { error: true, response: error };
        }
    }, getDetailtProduct: async (id) => {
        try {
            const detailResponse = await axios.get(`${Config.URL_API}/items/${id}`);
            return detailResponse.data;
        } catch (error) {
            return { error: true, response: error };

        }
    }
};
export { ProductServices };