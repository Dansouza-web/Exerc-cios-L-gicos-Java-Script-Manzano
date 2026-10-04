let contador = 1;
let divisiveis = "";

while (contador < 200) {
    if (contador % 4 === 0) {
        divisiveis += `${contador}, `;
    }
    contador++;
}

alert(`Os números divisíveis por 4 menores que 200 são:\n${divisiveis.slice(0, -2)}`);