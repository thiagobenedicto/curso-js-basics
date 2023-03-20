/* function contar() {
    if (document.getElementById('txtInt').value != '' && document.getElementById('txtIni').value != '' && document.getElementById('txtFim').value != '') {
        var inicio = document.getElementById('txtIni').value
        var fim = document.getElementById('txtFim').value
        var fimNum = Number(fim)
        var resultadoTxt = inicio
        var intervalo = document.getElementById('txtInt').value
        var intervaloNum = Number(intervalo)
        if (inicio > 0 && fim > 0 && intervalo > 0) {
            if (inicio < fim) {
                var contador = Number(inicio)
                do {
                    contador += intervaloNum
                    resultadoTxt += ` 👉 ${contador}`
                } while (contador <= fimNum - intervaloNum)  
            } else {
                var contador = Number(inicio)
                do {
                    contador -= intervaloNum
                    resultadoTxt += ` 👉 ${contador}`
                } while (contador >= fimNum + intervaloNum)  
            }
            res.innerHTML = `${resultadoTxt} 👉 🏁🏁`
        } else {
            res.innerHTML = 'Impossível calcular valores zerados!'
        }
    } else {
        window.alert('[ERRO] Favor informar todos os campos')
    }
} */


function contar() {
    let ini = document.getElementById('txtIni').value
    let fim = document.getElementById('txtFim').value
    let inter = document.getElementById('txtInt').value
    if (ini.length == 0 || fim.length == 0 || inter.length == 0) {
        alert('[ERRO] Favor informar todos os campos')
    } else {
        res.innerHTML = 'Contagem: <br>'
        let i = Number(ini)
        let f = Number(fim)
        let int = Number(inter)
        if (int <= 0) {
            alert('[ERRO] Passo inválido. Considerando INTERVALO = 1')
            int = 1
        }
        if (i > f) {
            // Contagem regressiva
            for (let c = i; c >= f; c -= int) {
                res.innerHTML += `${c} 👉 `
            }
        } else {
            // Contagem crescente
            for (let c = i; c <= f; c += int) {
                res.innerHTML += `${c} 👉 `
            } 
        }
    }
}