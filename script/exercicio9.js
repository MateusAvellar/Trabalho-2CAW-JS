function verificarPrimo() {

    let numero = Number(document.getElementById("numero").value);
    let primo = true;

    if (numero <= 1) {
        primo = false;
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        document.getElementById("resultado").innerText = "É primo";
    } else {
        document.getElementById("resultado").innerText = "Não é primo";
    }
}