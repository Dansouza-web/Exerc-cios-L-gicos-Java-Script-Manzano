alert("bem vindo ao programa soma e média de 10 valores ");

let soma = 0;

for(let contador = 1; contador <= 10; contador++){
    const valor = Number(prompt(`Digite o ${contador}º valor:`));
    soma += valor;
}
const media = soma /10;
alert(`A soma dos valores é ${soma}.\nA média aritmética é ${media}.`);