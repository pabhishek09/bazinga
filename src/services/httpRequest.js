function HttpRequest() {

  const baseURL = process.env.API_BASE_URL || 'http://localhost:8000/';

  const { data, status, statusText } = await axios({ ...config, baseURL });
  return {
    data,
    status,
    statusText,
  };

}

export default HttpRequest;
