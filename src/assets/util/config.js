const config = {
    URL_API: (process.env.REACT_APP_URL_API) ? process.env.REACT_APP_URL_API : 'https://mercado-libre-backend-beta.vercel.app/api',
    DEVELOP_MESSAGE: (process.env.REACT_APP_DEVELOP_MESSAGE) ? process.env.REACT_APP_DEVELOP_MESSAGE : 'Esta función está en desarrollo. Por favor, inténtelo de nuevo más tarde.',    
    GENERAL_ERROR_MESSAGE: (process.env.REACT_APP_GENERAL_ERROR_MESSAGE) ? process.env.REACT_APP_GENERAL_ERROR_MESSAGE : 'Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.'
}

module.exports = config;