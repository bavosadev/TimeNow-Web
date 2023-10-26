function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('manha')
    let data = new Date()
    let hora = data.getHours()
    if (hora >= 6 && hora < 12) {
        img.src = './Assets/Manha.png'
        document.body.style.background = '#C7CAC9'
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`

    } else if (hora >= 12 && hora <= 18) {
        img.src = './Assets/tarde.png'
        document.body.style.background = '#D3AB78'
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`

    } else {
        img.src = './Assets/Noite.png'
        document.body.style.background = '#13120D'
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`

    }
}


