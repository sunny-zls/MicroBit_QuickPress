input.onLogoEvent(TouchButtonEvent.Touched, function () {
    游戏开始 = 1
})
input.onButtonPressed(Button.A, function () {
    if (游戏开始) {
        游戏开始 = 0
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        soundExpression.happy.play()
    }
})
input.onButtonPressed(Button.B, function () {
    if (游戏开始) {
        游戏开始 = 0
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        soundExpression.happy.play()
    }
})
let 游戏开始 = 0
游戏开始 = 1
basic.forever(function () {
    if (游戏开始) {
        basic.showIcon(IconNames.Heart)
    }
    if (游戏开始) {
        basic.showIcon(IconNames.SmallHeart)
    }
})
