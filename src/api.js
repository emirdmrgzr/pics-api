import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID VEOTcXgpdheDgS_zI4waNU9P6ekiYKHrQMXbmsk03_I',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;