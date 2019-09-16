// Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = async(base, limite = 10) => {
    console.log('======================='.green);
    console.log(`===tabla de ${base}====`.red);
    console.log('======================='.blue);

    let texto = '';
    for (let i = 1; i <= limite; i++) {
        texto += `${i}*${base}=${i*base}\n`;
    }
    return texto;
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducito ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
            console.log(`El archivo` + colors.green(` tabla-${base}.txt`) + ` ha sido creado!`);
        });
    });
}

module.exports = {
    listarTabla,
    crearArchivo
}