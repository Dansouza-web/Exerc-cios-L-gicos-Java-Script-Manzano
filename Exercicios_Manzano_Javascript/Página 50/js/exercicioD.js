alert("Bem vindo ao programa grãos de trigo no tabuleiro");
let graos = 2;
let total = 0;

for (let quadro =1;quadro <=64; quadro++){
    total += graos;
    graos *= 2;
}
alert(`O total de grãos de trigo no tabuleiro é ${total}`)