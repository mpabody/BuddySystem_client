export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'buddy-system-mpcw.herokuapp.com':
    APIURL = 'https://buddysystemwebapi.azurewebsites.net'
    break;
    default:
      APIURL = 'https://localhost:44365';
}
