let mensagem = "";
for (let celsius = 10; celsius <= 100; celsius += 10) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    mensagem += `${celsius} °C equivalem a ${fahrenheit} °F\n`;
}
alert(mensagem);