function forRandom(){
    for (let index = 0 ; index < 3; index++) {
        const numeroRandom = Math.floor(Math.random() * (10 - 0 + 1) + 1)
        const escolha = prompt('Advinhe um número de 0-10')
        if (escolha != numeroRandom) {
            alert(`Você errou! Você tem mais ${-index - 1 + 3} tentativas`)
        } else {
            alert (`Parabéns! Você acertou! O número era ${numeroRandom}`)
            break
        }
    }
    }