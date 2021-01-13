// Requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('====================='.rainbow);
    console.log(`Tabla del ${base}`.green);
    console.log('====================='.magenta);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let datos = '';
        for (let i = 1; i <= limite; i++) {
            datos += (`${base}* ${i} = ${i * base}\n`);
        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tables/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}