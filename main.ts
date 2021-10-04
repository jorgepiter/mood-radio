input.onButtonPressed(Button.A, function () {
    basic.showString("T")
    basic.clearScreen()
    basic.showNumber(Temp_esca)
    basic.showString("H")
    basic.clearScreen()
    basic.showNumber(Humedad)
})
function animacion () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    radio.sendValue("name", Temp_esca)
})
let Temp = 0
let Humedad = 0
let Temp_esca = 0
radio.setGroup(1)
basic.forever(function () {
    Temp = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    100
    )
    Temp_esca = 45 * (Temp / 100)
    Humedad = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    100
    )
    animacion()
    if (Temp_esca >= 38 && Humedad <= 20) {
        basic.showString("Válvula ON")
        radio.sendNumber(0)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P1, 710)
    }
})
