alert("Bem vindo ao programa da soma dos pares de 1 a 500");
let soma = 0;
for (let contador = 1; contador <=500; contador++){
    if (contador % 2 === 0){
        soma += contador;
    }
}
alert(`A soma dos valores pares de 1 ate 500 é de ${soma}.`)