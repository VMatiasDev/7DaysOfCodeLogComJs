/* Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante:
cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado,
mostrando uma mensagem "Até a próxima". */

/* Criar as funções pra cada operação > Criar o prompt que vai perguntar qual operação fazer > Alert com o resultado */

function calc(){
let escolha = prompt('Digite a operação que deseja realizar: "soma", "subtracao", "multiplicacao", "divisao" ou "sair"')
switch(escolha) {
    case "soma":
        soma()
        break
    case "subtracao":
        subtracao()
        break
    case "multiplicacao":
        multiplicacao()
        break
    case "divisao":
        divisao()
        break
    case "sair":
        alert('Até mais!')
    default:
        alert('Opção inválida')
}
}

function soma () {
    let numero1Soma = parseFloat(prompt('Digite o primeiro valor'))
    let numero2Soma = parseFloat(prompt('Digite o segundo valor'))
    let resultadoSoma = numero1Soma + numero2Soma
    alert('O resultado da soma é: ' + resultadoSoma)
}

function subtracao () {
    let numero1Subtracao = parseFloat(prompt('Digite o primeiro valor'))
    let numero2Subtracao = parseFloat(prompt('Digite o segundo valor'))
    let resultadoSubtracao = numero1Subtracao - numero2Subtracao
    alert('O resultado da subtração é: ' + resultadoSubtracao)
}

function multiplicacao () {
    let numero1Multiplicacao = parseFloat(prompt('Digite o primeiro valor'))
    let numero2Multiplicacao = parseFloat(prompt('Digite o segundo valor'))
    let resultadoMultiplicacao = numero1Multiplicacao * numero2Multiplicacao
    alert('O resultado da multiplicação é: ' + resultadoMultiplicacao)
}

function divisao () {
    let numero1Divisao = parseFloat(prompt('Digite o primeiro valor'))
    let numero2Divisao = parseFloat(prompt('Digite o segundo valor'))
    let resultadoDivisao = numero1Divisao / numero2Divisao
    alert('O resultado da divisão é: ' + resultadoDivisao)
}