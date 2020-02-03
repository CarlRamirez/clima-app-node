const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
//lugar.getLugar(argv.direccion)
//    .then(console.log);

//clima.getClima(17.049999, -96.720001).then(console.log).catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        //result = clima.getClima(lugar.getLugar(direccion).lat, lugar.getLugar(direccion).lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);