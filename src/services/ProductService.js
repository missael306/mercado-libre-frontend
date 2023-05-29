import axios from 'axios';
const Config = require('../assets/util/config');


const ProductServices = {
    getProducts: async (searchValue) => {        
        try {                        
            const productResponse = await axios.get(`${Config.URL_API}/items`, { params: { q: searchValue } });
            return productResponse.data;
        } catch (error) {            
            return{error: true, response: error};            
        }        
    }
};
export { ProductServices };