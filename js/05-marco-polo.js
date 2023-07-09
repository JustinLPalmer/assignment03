for (let result = 1; result <= 100 ; result++) {
    if (((result % 3) == 0) && ((result % 5) == 0)) {
        console.log('Marco! Polo!')
    } else if 
        ((result % 3) == 0) {
            console.log('Marco!')
    } else if
        ((result % 5) == 0) {
        console.log('Polo!')
    } else {
        console.log(result)
    }
}