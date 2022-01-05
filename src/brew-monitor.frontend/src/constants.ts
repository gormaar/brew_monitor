export const getBackendBaseUri = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080';
  } else if (process.env.REACT_APP_API_URL && process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_API_URL;
  } else {
    return 'https://www.gormaar.no/brew-monitor/api';
  }
};
