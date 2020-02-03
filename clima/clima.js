const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${lng}&appid=88fabd27ca7717e84af048e38da90b5c&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}