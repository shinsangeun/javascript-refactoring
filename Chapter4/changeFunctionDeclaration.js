//before
function circum(radius) {
    return 2 * Math.PI * radius;
}

//after
function circum(radius) {
    return circumference(radius);
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}