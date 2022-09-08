input.onButtonPressed(Button.A, function () {
    basic.showNumber(numero)
    numero += 1
})
input.onButtonPressed(Button.AB, function () {
    texto = "queso"
    basic.showString(texto)
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString(texto)
})
let numero = 0
let texto = ""
texto = "pan"
numero = 1
basic.forever(function () {
	
})
