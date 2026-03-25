function buscarNumero(){

let numero = 1;

while(numero <= 100){
    if(numero % 5 == 0 && numero % 7 == 0 ){
        document.getElementById("resultado").innerText =
                "O primeiro número é: " + numero;
    }
    numero++;
 }
}