function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>.`
    if (hora <= 12) {
        img.src = 'manha.png'
        document.body.style.background = '#47C0CF'

    } else if (hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#A3DDFA'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#285C91'
        msg.innerHTML += `<p> Tenha uma boa noite.`
    }
}