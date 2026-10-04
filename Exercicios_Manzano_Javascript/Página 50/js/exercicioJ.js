alert("Bem vindo ao programa Divisão por subtrações sucessivas");
const dividendo = Number(prompt("Digite o dividendo :"));
const divisor = Number(prompt("Agora digita o divisor :"));
if (divisor <= 0){
    alert("O divisor precisa ser maior que zero.");
} else{
    let quociente = 0;
    let resto = dividendo;

    while (resto>=divisor){
        resto -= divisor;
        quociente++
    }
    alert(`O resultado da divisão inteira é ${quociente}.\n O resto é ${resto}`)
}
