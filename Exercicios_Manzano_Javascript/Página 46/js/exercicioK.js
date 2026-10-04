alert("Bem vindo ao programa da aréa da residência");
let areatotal = 0;
let continuar = "S";
while (continuar.toLowerCase() === "s"){
 const nomecomodo = prompt("Qual é o nome do cômodo?");
    const largura = Number(prompt("Qual é a largura do cômodo (em metros)?"));
    const comprimento = Number(prompt("E o comprimento (em metros)?"));

    const area = largura * comprimento;
    areatotal += area;

    alert(`A área de ${nomecomodo} é de ${area.toFixed(2)} m².`);

    continuar = prompt("Quer informar outro cômodo? (S/N)");
}

alert(`A área total da residência é de ${areatotal.toFixed(2)} m².`);
