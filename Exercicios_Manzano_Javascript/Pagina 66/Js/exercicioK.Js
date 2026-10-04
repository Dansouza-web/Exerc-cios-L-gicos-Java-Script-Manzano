let mensagem = "";
for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 !== 0) {
        let fatorial = 1;

        for (let fator = 1; fator <= numero; fator++) {
            fatorial *= fator;
        }
        mensagem += `O fatorial de ${numero} é ${fatorial}\n`;
    }
}
alert(mensagem);