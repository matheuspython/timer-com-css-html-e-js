var hora = 0
var minutos = 0
var segundos = 0

ss = document.querySelector('.horas')
mm = document.querySelector('.minutos')
hh = document.querySelector('.segundos')



var timer = setInterval(() => {
    segundos++
    if (segundos == 61) {
        segundos = 0
        minutos++
    }

    if (minutos == 61) {
        minutos = 0
        hora++
    }

    ss.innerHTML = segundos
    mm.innerHTML = minutos
    hh.innerHTML = hora
}, 1000);

function start() {
    var timer = setInterval(() => {
        segundos++
        if (segundos == 61) {
            segundos = 0
            minutos++
        }

        if (minutos == 61) {
            minutos = 0
            hora++
        }

        ss.innerHTML = segundos
        mm.innerHTML = minutos
        hh.innerHTML = hora
    }, 1000);

}

function pause() {
    clearInterval(timer)
}

function stops() {
    hora = 0
    minutos = 0
    segundos = 0
    clearInterval(timer)
    ss.innerHTML = segundos
    mm.innerHTML = minutos
    hh.innerHTML = hora

}