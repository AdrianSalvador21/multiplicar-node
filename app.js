const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
  case 'listar':
     console.log("listar");
     listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
      console.log("crear");
      crearArchivo(argv.base)
         .then(archivo => console.log(`Archivo creado: ${archivo}`))
           .catch(e => console.log(e));
    break;
  default:
      console.log('comando no reconocido');

}

console.log('Base:',argv.base);
console.log('Limite:',argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];
