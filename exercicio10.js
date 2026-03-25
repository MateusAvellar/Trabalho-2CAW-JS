function inverterNumero() {

    let numero = document.getElementById("numero").value;
    let invertido = "";

    for (let i = numero.length - 1; i >= 0; i--) {
        invertido += numero[i];
    }

    document.getElementById("resultado").innerText =
        "Número invertido: " + invertido;
}