const axios = require('axios');
const getLugar = async(dir) => {
    const encodedURL = encodeURI(dir);
    console.log(encodedURL);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedURL}`,
        headers: { 'x-rapidapi-key': 'bdcb7f9d5fmsh7f5aa4b5d5c84cap14af84jsnbbf68101575d' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugar
};