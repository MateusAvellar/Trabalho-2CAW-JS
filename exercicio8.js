function calcularFatorial() {

    let numero = Number(document.getElementById("numero").value);
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById("resultado").innerText =
        "Fatorial: " + fatorial;
}