function calcularSoma() {

    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += i;
    }

    document.getElementById("resultado").innerText =
        "A soma é: " + soma;
}