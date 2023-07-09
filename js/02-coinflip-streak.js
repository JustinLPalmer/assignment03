let coinFlip
do {
        coinFlip = Math.random()
        if (coinFlip <= .5) {
            console.log("Heads") 
        } else if (coinFlip > .5) {    
            console.log("Tails") 
            break 
        }
    } while (coinFlip = "Heads");
