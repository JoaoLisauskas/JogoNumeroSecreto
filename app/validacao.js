const fundo = document.querySelector('#corpo')

function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    

    if (ChuteForInvalido(numero)){
        if (chute === "game over"){
            fundo.classList.add("gameover")
            document.body.innerHTML = `
            <h2>Você Perdeu!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
        }else{
            elementoChute.innerHTML += '<div>Valor inválido</div>'
        }
    }

    if (numeroForMaiorOuMenorQueValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>
        `
    }
}


function ChuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})