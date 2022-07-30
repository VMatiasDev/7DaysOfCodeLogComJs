function random() {
    const numeroEscolhido = Math.floor(Math.random() * (10 - 0 + 1) + 0)
    const escolha = prompt('Advinhe o número estou pensando (Dica: Entre 0-10)')
    if (escolha != numeroEscolhido) {
        alert('Número errado. Você tem mais 2 tentativas')
        const escolha2 = prompt('Qual número estou pensando?')
        if (escolha2 != numeroEscolhido) {
            alert('Número errado. Você tem mais 1 tentativa')
            const escolha3 = prompt('Qual número estou pensando?')
            if (escolha3 != numeroEscolhido) {
                alert(`O número correto seria ${numeroEscolhido}`)
            } else {
                alert(`Você acertou! O número era ${numeroEscolhido}! Parabéns!`)
            }
        } else {
            alert(`Você acertou! O número era ${numeroEscolhido}! Parabéns!`)
        }
    } else {
        alert(`Você acertou! O número era ${numeroEscolhido}! Parabéns!`)
    }
}