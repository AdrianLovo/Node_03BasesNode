const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: false,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: false,
        describe: 'El numero hasta donde llegara la tabla de multiplicar'
    })
    .check( (arg, options) => {
        if(isNaN(arg.b)){
            throw 'La base tiene que ser un numero';
        }else{
            return true;
        }
    })
    .argv;

module.exports = argv; 