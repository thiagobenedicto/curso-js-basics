/* function gerarTab() {
    if (document.getElementById('txtnum').value != '') {
        var numero = Number(document.getElementById('txtnum').value)
        var tabela = document.createElement('table')
        for (var contador = 1; contador <= 10; contador++) {
            var linha = document.createElement('tr')
            var cell = document.createElement('td')
            var resultado = contador * numero 
            cell.appendChild(document.createTextNode(`${numero} x ${contador} = ${resultado}`))
            linha.appendChild(cell)
            table.appendChild(linha)
        }
    } else {
        window.alert('[ERRO] Favor digitar um número!')
    }
} */

function gerarTab() {
    let num = document.getElementById('txtnum')
    let tab = document.createElement('select')
    tab.size = 10
    if (num.value.length == 0) {
        alert('[ERRO] Insira um valor')
    } else {
        n = Number(num.value)
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
        table.appendChild(tab)
}