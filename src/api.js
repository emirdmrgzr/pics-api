import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
            method: 'GET',
            cache: 'no-cache',
            credentials: 'same-origin',
    headers: {
      Authorization: 'Client-ID VEOTcXgpdheDgS_zI4waNU9P6ekiYKHrQMXbmsk03_I',
    },
    params: {
      query: term,
    },
  });

    return response;
};

export default searchImages;
