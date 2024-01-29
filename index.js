// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
    return Math.abs(dist - 42)
}

function distanceFromHqInFeet (dist) {
    return Math.abs((dist - 42) * 264)
}

function distanceTravelledInFeet (start, stop) {
    return Math.abs((start - stop) * 264)
}

function calculatesFarePrice (start, destination) {
    const dist = Math.abs(start - destination)
    const feetTravelled = dist * 264;

    if (feetTravelled <= 400) {
        return 0
    } else if (feetTravelled <= 2000) {
        return ((feetTravelled - 400) * 0.02)
    } else if (feetTravelled < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
    
}