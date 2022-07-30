/* Dar escolhas (front ou back) -> se for front, seguir linha de escolha react/vue / Se for back, seguir linha C#/java ->
   Mostrar "Você quer continuar aprendendo Frontend com react ou quer se tornar full stack" e dar escolha -> Retornar valores recebidos até então ->
   Mostrar caixa para o usuário especificar as tecnologias que deseja aprender (dando N opções) */

function main() {
    const area = prompt('Você deseja estudar Frontend ou Backend?')
    switch(area) {
        case "Frontend":
            frontendPath()
            break
        case "Backend":
            backendPath()
            break
        default:
            alert('Você digitou uma área inválida')
    }
}

function chooseTech() {
    const escolha = prompt('Quais tecnologias você gostaria de conhecer?')
    if (escolha != '') {
        const continuacao = prompt('Tem mais alguma tecnologia que você gostaria de conhecer?')
        if (continuacao == 'sim') {
            chooseTech()
        } else if (continuacao == 'nao') {
            alert('Bons estudos!')
        }
    } else {
        alert('Obrigado')
    }
}

function frontendPath() {
    const resultadoFront = prompt('Você quer continuar aprendendo Frontend com React ou com Vue?')
    const resultadoTechFront = prompt(`'Você quer se especializar em Frontend com ${resultadoFront} ou quer seguir se desenvolvendo para se tornar fullstack?'`)
    switch(resultadoTechFront) {
        case "Especializar":
            alert(`'Você vai se especializar em ${resultadoFront}'`)
            break
        case "Fullstack":
            alert('Continue estudando e praticando para se tornar um fullstack')
            break
        default:
            alert('Você digitou uma opção inválida')
    }
}

function backendPath() {
    const resultadoBack = prompt('Você quer continuar aprendendo Backend com C# ou com Java?')
    const resultadoTechBack = prompt(`'Você quer se especializar em Backend com ${resultadoBack} ou quer seguir se desenvolvendo para se tornar fullstack?'`)
    switch(resultadoTechBack) {
        case "Especializar":
            alert(`'Você vai se especializar em ${resultadoBack}'`)
            break
        case "Fullstack":
            alert('Continue estudando e praticando para se tornar um fullstack')
            break
        default:
            alert('Você digitou uma opção inválida')
    }
}

/* Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer.
Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado. */