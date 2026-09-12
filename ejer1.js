const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
    rl.question('Ingrese la nota del Parcial 1: ', (nota1) => {
        rl.question('Ingrese la nota del Parcial 2: ', (nota2) => {
            rl.question('Ingrese la nota del Parcial 3: ', (nota3) => {

                nota1 = parseFloat(nota1);
                nota2 = parseFloat(nota2);
                nota3 = parseFloat(nota3);

                const notaFinal = (nota1 * 0.30) +
                                  (nota2 * 0.30) +
                                  (nota3 * 0.40);

                console.log('\n--- REPORTE DE NOTAS ---');
                console.log('Estudiante: ' + nombre);
                console.log('Nota final: ' + notaFinal.toFixed(2));

                rl.close();
            });
        });
    });
});
