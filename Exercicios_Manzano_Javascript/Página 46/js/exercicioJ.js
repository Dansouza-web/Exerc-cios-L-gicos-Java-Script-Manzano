alert("Bem vindo a soma e média dos pares de 50 a 70");
let soma = 0;
let quantidade = 0;
for (let contador = 50; contador <= 70; contador++) {
    if (contador % 2 === 0) {
        soma += contador;
        quantidade++;
    }
}
const media = soma / quantidade;

alert(`A soma dos valores pares entre 50 e 70 é ${soma}.\nA média aritmética é ${media}.`)