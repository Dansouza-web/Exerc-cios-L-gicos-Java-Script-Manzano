const base = Number(prompt("Digite a base:"));
const expoente = Number(prompt("Digite o expoente:"));
let potencia = 1;
for (let contador = 1; contador <= expoente; contador++) {
    potencia *= base;
}
alert(`${base} elevado a ${expoente} é igual a ${potencia}.`);