/* Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará
se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas,
como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta,
ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho */

/* Construir array vazio (mas com as categorias definidas) que será preenchido com os itens > Criar o prompt no qual vão ser inseridos os itens > 
Dar .push no prompt para entrar no array > Construir switch case que vai colocar o item adicionado na categoria correta >
Colocar o prompt em while (enquanto quiser colocar mais itens) > Quando sair do while, exibir a lista que foi criada */

function main() {
const listaFrutas = []
const listaLaticinios = []
const listaCongelados = []
const listaDoces = []
let adicionar = prompt('Você deseja adicionar uma comida na sua lista de compras?')
while (adicionar == 'sim') {
    const escolherItem = prompt('Qual comida?')
    const escolherCategoria = prompt('Qual categoria? Digite 1 para "Frutas", 2 para "Laticínios", 3 para "Congelados" ou 4 para "Doces"')
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
    adicionar = prompt('Você deseja adicionar uma comida na sua lista de compras?')
}
alert(`Sua lista de compras é:
Frutas: ${listaFrutas};
Laticínios: ${listaLaticinios};
Congelados: ${listaCongelados};
Doces: ${listaDoces}`)
}