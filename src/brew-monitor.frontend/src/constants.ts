export const getBackendBaseUri = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000'
    } else if (process.env.REACT_APP_API_URL && process.env.NODE_ENV === 'production') {
        return process.env.REACT_APP_API_URL
    } else {
        return 'http://127.0.0.1:8080'
    }
}