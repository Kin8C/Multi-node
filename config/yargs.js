const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const { argv } = require('yargs');

yargs(hideBin(process.argv))
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}