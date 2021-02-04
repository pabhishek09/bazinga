import gh from 'octonode';
import httpRequest from './httpRequest';

const clientId = '3df232c8f7c9ca23ee40'; 
const clientSecret = '3ac2e920fdf8a27d0f053fd6c29217d439d81ba7';
const redirectUri = 'redirect_uri';



async function authenticate() {
  const [ state ] = window.crypto.getRandomValues(new Uint32Array(1));
  httpRequest({
    url: 'https://github.com/login/oauth/authorize',
    headers: {
      'Access-Control-Allow-Origin': 'https://github.com/'
    },
  });
  console.log('authenticate function');
}


export {
  authenticate,
};
