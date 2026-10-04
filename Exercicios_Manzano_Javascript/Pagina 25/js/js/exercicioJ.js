alert("Bem-vindo ao programa de conversão de dólares para reais!");
const cotacaodolar = Number(prompt("Qual é a cotação atual do dólar?"));
const valoremdolares = Number(prompt("Agora me diga: quantos dólares você tem disponíveis na carteira?"));
const conversao = valoremdolares * cotacaodolar;
alert(`Seus dólares valem R$ ${conversao.toFixed(2)}.`);