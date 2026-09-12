const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el monto del Mesero 1: ', (mesero1) => {
    rl.question('Ingrese el monto del Mesero 2: ', (mesero2) => {
        rl.question('Ingrese el monto del Mesero 3: ', (mesero3) => {

            mesero1 = parseFloat(mesero1);
            mesero2 = parseFloat(mesero2);
            mesero3 = parseFloat(mesero3);

            const montoTotal = mesero1 + mesero2 + mesero3;
            const comision = montoTotal * 0.05;
            const montoNeto = montoTotal - comision;
            const pagoIndividual = montoNeto / 3;

            console.log('\n--- RESUMEN DE PROPINAS ---');
            console.log('Monto Total Recolectado: $' + montoTotal.toFixed(2));
            console.log('Comisión Administrativa: $' + comision.toFixed(2));
            console.log('Monto Neto a Repartir: $' + montoNeto.toFixed(2));
            console.log('Pago para cada mesero: $' + pagoIndividual.toFixed(2));

            rl.close();
        });
    });
});
