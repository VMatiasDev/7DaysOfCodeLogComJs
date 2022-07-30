function forDefinido(){
for (let index = 0 ; index < 3; index++) {
    const escolha = prompt('Advinhe um número de 0-10')
    if (escolha != 7) {
        alert(`Você errou! Você tem mais ${index + 1 - 3} tentativas`)
    } else {
        alert ('Parabéns! Você acertou! O número era 7')
        break
    }
}
}