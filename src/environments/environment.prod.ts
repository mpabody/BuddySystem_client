export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'buddy-system-mpcw.herokuapp.com':
    APIURL = 'https://buddysystemwebapi.azurewebsites.net'
    break;
    default:
      APIURL = 'http://localhost:44365';
}
