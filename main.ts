let heading = ""
basic.forever(function () {
    if (input.compassHeading() < 90) {
        heading = "N"
    } else if (input.compassHeading() < 270) {
        heading = 0
    } else {
        heading = "N"
    }
    basic.showString(heading)
})
