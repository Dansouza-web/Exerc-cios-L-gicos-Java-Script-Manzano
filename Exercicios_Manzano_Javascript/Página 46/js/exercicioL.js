let valor = Number(prompt("Digite um valor inteiro positivo (negativo para encerrar):"));
let maior = valor;
let menor = valor;
let leuvalor = false;
while (valor >= 0) {
    leuvalor = true;

    if (valor > maior) {
        maior = valor;
    }

    if (valor < menor) {
        menor = valor;
    }

    valor = Number(prompt("Digite um valor inteiro positivo (negativo para encerrar):"));
}
if (leuvalor) {
    alert(`O maior valor informado foi ${maior}.\nO menor valor informado foi ${menor}.`);
} else {
    alert("Você não informou nenhum valor positivo.");
}