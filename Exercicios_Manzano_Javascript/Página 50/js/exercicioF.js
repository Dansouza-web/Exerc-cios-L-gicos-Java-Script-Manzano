alert("Bem vindo ao programa de soma sucessica até um negativo")
let soma = 0;
let quantidade = 0;
let valor = Number(prompt("Digite um valor positivo (negativo para encerrar):"));
while (valor >= 0) {
    soma += valor;
    quantidade++;
    valor = Number(prompt("Digite um valor positivo (negativo para encerrar):"));
}
if (quantidade > 0) {
    const media = soma / quantidade;
    alert(`Você informou ${quantidade} valores.\nA soma deles é ${soma}.\nA média aritmética é ${media}.`);
} else {
    alert("Você não informou nenhum valor positivo.");
}