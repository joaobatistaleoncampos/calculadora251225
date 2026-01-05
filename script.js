let esquerda = "";
let direita = "";
let sinal = null;

function addNumero(numero) {
    if (sinal == null) {
        esquerda = esquerda.concat(numero);
    } else {
        direita = direita.concat(numero);

    }

  document.getElementById("visor").value=document.getElementById("visor").value.concat(numero)
}

function addSinal(operacao) {
    sinal = operacao;
    document.getElementById("visor").value= esquerda;
    document.getElementById("visor").value=document.getElementById("visor").value.concat(operacao)
}

function calcula() {

    let resultado=0;
    switch(sinal){
        case"%":
        resultado = Number(esquerda) % Number(direita);
        break;
         case"*":
        resultado = Number(esquerda) * Number(direita);
        break;
         case"-":
        resultado = Number(esquerda) - Number(direita);
        break;
         case"+":
        resultado = Number(esquerda) + Number(direita);
        break;
    }
    limpar();
    document.getElementById("visor").value= resultado;
    esquerda=resultado;

}

function limpar(){
    document.getElementById("visor").value="";
    esquerda ="";
    direita="";
    sinal =null;

}