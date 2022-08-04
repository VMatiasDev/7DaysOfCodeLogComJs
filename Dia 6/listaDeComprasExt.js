/* Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de
“você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual,
e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro
da lista de compras. */

/* Alterar "você deseja adicionar" para opção de adicionar ou remover (depois que tiver 1 item adicionado) >
se for remover, abrir um prompt com os itens que estão na lista > criar alerta de que foi removido com sucesso >
organizar o while com as duas opções (adicionar ou remover) >  */

function main() {
    const listaFrutas = []
    const listaLaticinios = []
    const listaCongelados = []
    const listaDoces = []
    let adicionar = prompt('Você deseja adicionar uma comida na sua lista de compras?')
    let escolherItem = prompt('Qual comida?')
    let escolherCategoria = prompt('Qual categoria? Digite 1 para "Frutas", 2 para "Laticínios", 3 para "Congelados" ou 4 para "Doces"')
    switch(escolherCategoria) {
        case "1": const adicionarItem1 = listaFrutas.push(' ' + escolherItem)
        break
        case "2": const adicionarItem2 = listaLaticinios.push(' ' + escolherItem)
        break
        case "3": const adicionarItem3 = listaCongelados.push(' ' + escolherItem)
        break
        case "4": const adicionarItem4 = listaDoces.push(' ' + escolherItem)
        break
    }
    adicionar = prompt('Você deseja adicionar ou remover um item da sua lista? Digite "1" para adicionar ou "2" para remover! Caso queira encerrar e ver sua lista, digite outra coisa')
    while (adicionar == '1' || adicionar == '2') {
    if (adicionar == '1') {
        let escolherItem = prompt('Qual comida?')
        let escolherCategoria = prompt('Qual categoria? Digite 1 para "Frutas", 2 para "Laticínios", 3 para "Congelados" ou 4 para "Doces"')
        switch(escolherCategoria) {
            case "1": const adicionarItem1 = listaFrutas.push(' ' + escolherItem)
            break
            case "2": const adicionarItem2 = listaLaticinios.push(' ' + escolherItem)
            break
            case "3": const adicionarItem3 = listaCongelados.push(' ' + escolherItem)
            break
            case "4": const adicionarItem4 = listaDoces.push(' ' + escolherItem)
            break
        }} else if (adicionar == '2') {
            let remover = prompt(`Qual item você deseja remover?
            Frutas: ${listaFrutas};
            Laticínios: ${listaLaticinios};
            Congelados: ${listaCongelados};
            Doces: ${listaDoces}`)
            if (temItem(listaFrutas, remover)) {
                removeItem(listaFrutas, remover)
            } else if (temItem(listaLaticinios, remover)) {
                removeItem(listaLaticinios, remover)
            } else if (temItem(listaCongelados, remover)) {
                removeItem(listaCongelados, remover)
            } else if (temItem(listaDoces, remover)) {
                removeItem(listaDoces, remover)
            } else {
                alert('O item digitado não está em nenhuma lista')
            }
        }
        adicionar = prompt('Você deseja adicionar ou remover um item da sua lista? Digite "1" para adicionar ou "2" para remover! Caso queira encerrar e ver sua lista, digite outra coisa')
    }
    
    alert(`Sua lista de compras é:
    Frutas: ${listaFrutas};
    Laticínios: ${listaLaticinios};
    Congelados: ${listaCongelados};
    Doces: ${listaDoces}`)
}

function removeItem(lista, item) {
    let posicao = lista.indexOf(item)
    lista.splice(posicao, 1)
    alert('Item removido com sucesso!')
}

function temItem(lista, item) {
    return lista.includes(' ' + item)
}