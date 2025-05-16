let distance = 0
zoombit.setMotorsSpeed(30, 30)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    rekabit.setServoPosition(ServoChannel.S1, 55)
    distance = zoombit.readUltrasonic()
    if (zoombit.readUltrasonic() > 30 && zoombit.readUltrasonic() < 40) {
        zoombit.setMotorsSpeed(0, 0)
        basic.showIcon(IconNames.Square)
    } else if (zoombit.readUltrasonic() < 30) {
        zoombit.setMotorsSpeed(-180, -180)
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
    } else {
        zoombit.setMotorsSpeed(180, 180)
        basic.showIcon(IconNames.No)
        basic.pause(1000)
    }
})
