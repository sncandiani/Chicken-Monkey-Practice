for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0) {
        console.log("Chicken")
    } else if (currentNumber % 7 === 0 ) {
        console.log("Chickenmonkey")
    } else {
        console.log(currentNumber)
    }
}