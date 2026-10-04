let mensagem = "Os números ímpares entre 0 e 20 são:\n";

for (let contador = 0; contador <= 20; contador++) {
    if (contador % 2 !== 0) {
        mensagem += `${contador}\n`;
    }
}

alert(mensagem);