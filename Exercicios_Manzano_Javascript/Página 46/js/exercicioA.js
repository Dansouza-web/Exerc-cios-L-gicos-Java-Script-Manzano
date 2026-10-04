const numero = Number(prompt("Digite um número para ver a tabuada:"));
let tabuada = `Tabuada do ${numero}:\n`;
for (let contador = 1; contador <= 10; contador++) {
    const resultado = numero * contador;
    tabuada += `${numero} x ${contador} = ${resultado}\n`;
}
alert(tabuada);