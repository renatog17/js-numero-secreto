const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)
document.getElementById("menor-valor").innerHTML = menorValor
document.getElementById("maior-valor").innerHTML = maiorValor



function gerarNumeroAleatorio(){
    return parseInt(Math.random() * (maiorValor +1))
}
