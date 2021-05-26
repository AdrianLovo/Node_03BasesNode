const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {

    try{
        let salida = '';
        let consola = '';

        for(let i=1; i <= hasta; i++){
            consola += `${base}` + colors.green(' X ') + `${i}` + colors.green(' = ') +  `${base*i} \n`;
            salida += `${base} X  ${i} =  ${base*i} \n`;
        }
        
        if(listar){
            console.log('=============='.green);
            console.log(`Tabla del: ${colors.blue(base)}`.bold.green);
            console.log('=============='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    }catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo
}