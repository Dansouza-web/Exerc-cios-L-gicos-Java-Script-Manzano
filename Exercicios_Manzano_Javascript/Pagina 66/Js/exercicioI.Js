let anterior = 1;
let atual = 1;
let serie = `${anterior}, ${atual}`;
for (let contador = 3; contador <= 15; contador++) {
    const proximo = anterior + atual;
    serie += `, ${proximo}`;
    anterior = atual;
    atual = proximo;
}
alert(`Os 15 primeiros termos de Fibonacci são:\n${serie}`);