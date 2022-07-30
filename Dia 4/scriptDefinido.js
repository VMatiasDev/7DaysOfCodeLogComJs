function main() {
    const escolha = prompt('Advinhe o número estou pensando (Dica: Entre 0-10)')
    if (escolha != 7) {
        alert('Número errado. Você tem mais 2 tentativas')
        const escolha2 = prompt('Qual número estou pensando?')
        if (escolha2 != 7) {
            alert('Número errado. Você tem mais 1 tentativa')
            const escolha3 = prompt('Qual número estou pensando?')
            if (escolha3 != 7) {
                alert('O número correto seria 7')
            } else {
                alert('Você acertou! O número era 7! Parabéns!')
            }
        } else {
            alert('Você acertou! O número era 7! Parabéns!')
        }
    } else {
        alert('Você acertou! O número era 7! Parabéns!')
    }
}