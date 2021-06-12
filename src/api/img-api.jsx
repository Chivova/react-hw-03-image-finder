import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '21510937-25dddef59cfdf7f1b5603f7e9';

const fetchImgApi = query => {
  return axios
    .get(
      `${BASE_URL}/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(r => r.data.hits);
};

const imgApi = {
  fetchImgApi,
};
export default imgApi;
