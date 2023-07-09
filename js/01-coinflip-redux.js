let coinFlip
let repetitions = Number(prompt('How many times would you like to flip the coin'))
for (let index = 0; index < repetitions; index++) {
    coinFlip = Math.random()
    if (coinFlip <= .5) {
        console.log("Heads") 
    } else if (coinFlip > .5) {    
        console.log("Tails")  
    }
}