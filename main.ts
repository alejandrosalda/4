let t = 0
let v = 0
let u = 0
function lavadoNormal () {
    t = 3000
    encendido(t)
    agregarAgua(t)
    detergente(t)
    lavar(t)
    vaciarAgua(t)
    agregarAgua(t)
    enjuagar(t)
    vaciarAgua(t)
    agregarAgua(t)
    suavizante(t)
    centrifugado(t)
    extraerRopa(t)
    apagado(t)
}
function lavadoDelicados () {
    v = 3000
    encendido(v)
    agregarAgua(v)
    detergente(v)
    lavar(v)
    vaciarAgua(v)
    agregarAgua(v)
    enjuagar(v)
    vaciarAgua(v)
    agregarAgua(v)
    suavizante(v)
    centrifugado(v)
    extraerRopa(v)
    apagado(v)
}
function lavar (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(tiempo)
}
function encendido (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playTone(523, music.beat(BeatFraction.Quarter))
    basic.pause(tiempo)
}
function enjuagar (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        # . # . #
        . # # # .
        # . # . #
        . # . # .
        `)
    basic.pause(tiempo)
}
input.onButtonPressed(Button.A, function () {
    lavadoNormal()
})
function extraerRopa (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(tiempo)
}
function detergente (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.pause(tiempo)
}
function suavizante (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
    music.playTone(659, music.beat(BeatFraction.Quarter))
    basic.pause(tiempo)
}
function centrifugado (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        # # . # #
        # . # . #
        . # # # .
        # . # . #
        # # . # #
        `)
    basic.pause(tiempo)
}
input.onButtonPressed(Button.AB, function () {
    lavadoDelicados()
})
input.onButtonPressed(Button.B, function () {
    lavadoJeans()
})
function lavadoJeans () {
    u = 4000
    encendido(u)
    agregarAgua(u)
    detergente(u)
    lavar(u)
    vaciarAgua(u)
    agregarAgua(u)
    enjuagar(u)
    vaciarAgua(u)
    agregarAgua(u)
    suavizante(u)
    centrifugado(u)
    extraerRopa(u)
    apagado(u)
}
function apagado (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(tiempo)
    basic.clearScreen()
}
function agregarAgua (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(tiempo)
}
function vaciarAgua (tiempo: number) {
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(tiempo)
}
