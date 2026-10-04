//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.
base = parseInt(prompt("Digite um numero : "))
for (let multiplicador = 1 ; multiplicador <10; multiplicador ++){
    resultado = base * multiplicador
    console.log(${base} + "X" + ${multiplicador} " = " + ${resultado})
}

