import axios from 'axios';
const searchImageAPI = async (term) => {
    const response = await axios.get('https://api.unsplash.com//search/photos', {
        headers : {Authorization : 'Client-ID UNHZU_9W_NmngHeatselORAVAT4Ez37pUUVj_MBS8Xk'
                  },
        params: { query : term
                }
    });
    return response.data.results;
};
export default searchImageAPI;