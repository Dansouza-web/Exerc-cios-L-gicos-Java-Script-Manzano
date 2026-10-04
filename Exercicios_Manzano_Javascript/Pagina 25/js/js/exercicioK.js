alert("bem vindo ao programa de conversao de reais para dolares");
const cotacaodolar = Number(prompt("Adicione a cotacao de dolar atual : "));
const valoremreais = Number(prompt("Agora me fale quantos reais vce tem disponivel em sua carteira: "));
conversao = valoremreais / cotacaodolar
alert(`A conversão da quantia da sua carteira de dolares pra o real é de : ${conversao}`)