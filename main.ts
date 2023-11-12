basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        # # # # #
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
    basic.showLeds(`
        # # . # #
        # . # . #
        . # . # .
        # . # . #
        # # . # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . # # #
        # # # # .
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
    led.setBrightness(input.soundLevel())
})
