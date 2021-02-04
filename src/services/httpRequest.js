import axios from 'axios';

const httpRequest = async function (config) {

  const baseURL = process.env.API_BASE_URL || 'http://localhost:8000/';

  console.log({config});

  const { data, status, statusText } = await axios(config);
  return {
    data,
    status,
    statusText,
  };

}

export default httpRequest;
