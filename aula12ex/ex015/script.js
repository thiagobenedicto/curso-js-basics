function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('txtAno')
    var test = document.getElementById('txt')

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoNasc.value)
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        imagem.setAttribute('class', 'center')
        if (sexo[0].checked) {
            var genero = 'Homem'
            if (idade < 16) {
                imagem.setAttribute('src', 'garoto.jpg')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'homem.jpg')
            } else {
                imagem.setAttribute('src', 'velho.jpg')
            }
        } else {
            var genero = 'Mulher'
            if (idade < 16) {
                imagem.setAttribute('src', 'garota.jpg')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'mulher.jpg')
            } else {
                imagem.setAttribute('src', 'velha.jpg')
            }
        }
        txt.innerHTML = `Detectamos um ${genero} com ${idade} anos de idade`
        txt.appendChild(imagem)
    }
}