// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
//1 até 500. //
alert("Programa soma de números pares")
pares = 0
for (numero = 1; numero <=500; numero++){
    if(
        numero % 2 == 0
    ){
        pares +=  numero
    }
}
alert("A soma de Todos os núm2eros pares de (1 à 500) é :" + pares)
