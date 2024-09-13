import axios from 'axios';

const apiRequest = async (url, method = 'GET', data = null, headers = {}) => {
  try {
    const options = {
      method,
      url,
      headers,
    };

    if (data) {
      options.data = data;
    }

    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error('Request error:', error);
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

export default apiRequest;
