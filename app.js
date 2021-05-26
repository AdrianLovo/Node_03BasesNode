const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow, ' creado'.yellow))
    .catch(error => console.log(error));