let mensagem = "";
for (let expoente = 0; expoente <= 15; expoente++) {
    let potencia = 1;
    for (let contador = 1; contador <= expoente; contador++) {
        potencia *= 3;
    }
    mensagem += `3 elevado a ${expoente} é igual a ${potencia}\n`;
}
alert(mensagem);