let miles
let gallons
let mpg
let again = 'y'
do {
    miles = parseFloat(prompt('Enter miles driven'))
    gallons = parseFloat(prompt('How many gallons does your tank hold?'))
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
       mpg = miles / gallons
       console.log(`Your log gets ${mpg.toFixed(2)} miles per gallon`)
    } else {
         alert('You have entered an invalid value.')
    }
    again = prompt('Do you want to run the application again? (y/n)')
        do {
            again = prompt('Do you want to run the application again? (y/n)')   
        } while ((again != 'y') && (again != 'n')) {
        }
} while (again === 'y');
console.log('Application has ended.')
