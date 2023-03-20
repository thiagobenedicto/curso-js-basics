// DECLARAR VARIAVEIS GLOBAIS

let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#tabsel')
let res = document.querySelector('div#result')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // LIMPAR RES CASO SEJAM INCLUIDOS NOVOS VALORES
    } else {
        alert('[ERRO] Valor inválido ou já adicionado')
    }
    num.value = ''
    num.focus() // AO ADICIONAR VALOR VAI LIMPAR O CAMPO E MANTER SELECIONADO PARA ADD OUTROS
}

function finalizar() {
    if (valores.length == 0) {
        alert('[ERRO] Favor inserir o número antes de finalizar')
    } else {
        let total = valores.length
        let soma = 0
        let menor = 0
        let maior = 0

        for (let c = 0; c < valores.length; c++) {
            soma += valores[c]
            if (valores[c] > maior) {
                maior = valores[c]
            } else {
                menor = valores[c]
            }
        }
        res.innerHTML += `<p>Quantidade de números: ${total}</p>`
        res.innerHTML += `<p>Menor número: ${menor}</p>`
        res.innerHTML += `<p>Maior número: ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores: ${soma / valores.length}</p>`
    }
}

function limpar() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    res.innerHTML = ''
    valores = []
}