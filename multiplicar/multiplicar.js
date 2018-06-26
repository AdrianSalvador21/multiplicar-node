//requires
const colors = require('colors');
const fs = require('fs'); //require que ya viene de node

let listarTabla = (base, limite=10) => {
    for (let i = 0; i <= limite; i++) {
      console.log(`${base}*${i} = ${base*i}\n`);
    }
};


let crearArchivo = (base) =>{

    return new Promise((resolve, reject)=>{

      if(!Number(base)){
        reject("El valor introducido no es un número!");
        return;
      }

      let data = '';

      for (let i = 0; i < 10; i++) {
        data += `${base}*${i} = ${base*i}\n`;
      }

      fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

        if (err)
           reject(err);
        else
           resolve(`tabla-${base}.txt`);

      });



    });

};

module.exports = {
  crearArchivo,
  listarTabla
}
