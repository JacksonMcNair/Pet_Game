input.onButtonPressed(Button.A, function () {
    Hunger += 1
    basic.showLeds(`
        . . . # #
        . . # # #
        . . # # .
        # # . . .
        . # . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Health += 1
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Happy += -1
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Health += -2
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        # . . # .
        . . # . .
        . # . . .
        # # # # .
        `)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Hunger += 1
    Happy += 1
    basic.showLeds(`
        . . . # #
        . . # # #
        . . # # .
        # # . . .
        . # . . .
        `)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
basic.showString("Meet your virtual pet!")
let Hunger = 10
basic.showLeds(`
    . . . # #
    . . # # #
    . . # # .
    # # . . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(1000)
basic.showString("Hunger = 10")
let Health = 10
basic.showIcon(IconNames.Heart)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(1000)
basic.showString("Health = 10")
let Happy = 10
basic.showIcon(IconNames.Happy)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(1000)
basic.showString("Happiness = 10")
basic.forever(function () {
    if (Health == 0) {
        basic.showIcon(IconNames.Skull)
        basic.pause(1000)
        basic.showString("GAME OVER")
        basic.clearScreen()
        Hunger = 10
        Health = 10
        Happy = 10
        basic.showString("NEW PET")
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Happy < 0) {
        Health += -1
    }
    if (Hunger == 0) {
        Health += -1
    }
    basic.pause(1000)
    Hunger += -1
    Happy += -1
})
