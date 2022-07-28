function dadosPessoais() {
    let nome = prompt('Qual o seu nome?')
    if (nome != null) {
        let idade = prompt('Quantos anos você tem?')
        if (idade != null) {
            let linguagem = prompt('Qual linguagem de programação você está estudando?')
            if (linguagem != null) {
                document.getElementById("resultado").innerHTML = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!";
            }
        }
    }
}