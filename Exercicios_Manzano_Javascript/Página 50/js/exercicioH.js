alert("Bem vindo ao calculo de area de um comodo");
let areatotal = 0;
const nomecomodo = prompt("Qual é o nome do cômodo?");
const largura = Number(prompt("Qual é a largura do cômodo (em metros)?"));
const comprimento = Number(prompt("E o comprimento (em metros)?"));
const area = largura * comprimento;
areatotal += area;
alert(`A área de ${nomecomodo} é de ${area.toFixed(2)}.`);
alert(`A área total da residência é de ${areatotal.toFixed(2)}`);