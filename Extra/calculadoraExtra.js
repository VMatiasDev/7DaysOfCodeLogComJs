function calc(){
    let escolha = prompt('Digite a operação que deseja realizar: "soma", "subtracao", "multiplicacao", "divisao" ou "sair"')
    // const listaOperacoes = {
    //     soma: (a, b) => a + b,
    //     subtracao: (a, b) => a - b,
    //     multiplicacao: (a, b) => a * b,
    //     divisao: (a, b) => a / b
    // }
    switch(escolha) {
        case "soma":
            calculo((a, b) => a + b)
            break
        case "subtracao":
            calculo((a, b) => a - b)
            break
        case "multiplicacao":
            calculo((a, b) => a * b)
            break
        case "divisao":
            calculo((a, b) => a / b)
            break
        case "sair":
            alert('Até mais!')
            break
        default:
            alert('Opção inválida')
    }
}
    
function calculo (operacao) {
    let numero1 = parseFloat(prompt('Digite o primeiro valor'))
    let numero2 = parseFloat(prompt('Digite o segundo valor'))
    let resultado = operacao(numero1, numero2)
    alert('O resultado é: ' + resultado)
}