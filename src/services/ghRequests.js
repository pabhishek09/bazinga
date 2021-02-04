import gh from 'octonode';
import httpRequest from './httpRequest';


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
