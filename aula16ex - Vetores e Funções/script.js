let v = [] // DECLARANDO O VETOR ANTES DE INICIAR A FUNÇÃO
let sel = document.getElementById('tabsel')
function addValor(n) {
    if (n.value <= 0 || n.value > 100 || v.indexOf(n.value) != -1) {
        alert('[ERRO] Valor inválido ou já adicionado na lista')
    } else {
        // ATUALIZAR O SELECT COM O VALOR X ADICIONADO.
        let optsel = document.createElement('option')
        optsel.label = `Valor ${n.value} adicionado.`
        sel.appendChild(optsel)
        return v.push(n.value) // TEM QUE ME RETORNAR O VALOR ADICIONADO EM UMA ARRAY
    }
}

function resultado() {
    let result = document.getElementById('result')
    let p = document.createElement('p')
    let sum = Number(v.reduce((somaParcial, a) => somaParcial + a, 0))
    let avg = 
    v.sort()
    alert(`Temos ao todo ${v.length} números`)
    p.innerHTML = `Ao todo, temos ${v.length} números cadastrados<br>O maior valor informado foi ${v[v.length - 1]}<br>O menor valor informado foi ${v[0]}<br>Somando todo os valores, temos ${sum}`
    result.appendChild(p)

}


function somar() {

}