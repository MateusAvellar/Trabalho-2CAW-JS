function verificarParImpar() {

    let numero = Number(document.getElementById("numero").value);

    if (numero % 2 === 0) {
        document.getElementById("resultado").innerText = "O número é PAR";
    } else {
        document.getElementById("resultado").innerText = "O número é ÍMPAR";
    }

}