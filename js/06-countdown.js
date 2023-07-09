let countDown = Number(prompt('Enter a number between 1 and 100'))
while (isNaN(countDown) || 0 >= countDown >= 100) {
    countDown = Number(prompt('Please enter a valid number between 1 and 100'))
}
for (countDown; countDown > 0; countDown--) {
        console.log(countDown)
}