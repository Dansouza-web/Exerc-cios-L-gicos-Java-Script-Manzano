alert("Bem vindo a soma dos fatoriasi de 15 valores");
let somatotal = 0;
for (let contador =1; contador <= 15; contador++ ){
    const valor = Number(prompt(`Digite o ${contador} valor : `));
    let fatorial = 1;
    for (let fator=1; fator<= valor; fator++){
        fatorial*= fator;
    }
    somatotal += fatorial;
}
alert(`O somatório dos fatoriais é ${somatotal}.`);
