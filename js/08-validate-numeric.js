// GLOBAL VARIABLES
let futureValue
let investment
let rate
let years

// COLLECT VARIABLES FROM USER
do {investment = parseFloat(prompt('Enter your investment amount in xxxx.xx format'))
    } while (isNaN(investment));
do {rate = parseFloat(prompt('Enter interest rate as xx.x'))
    } while (isNaN(rate) || 0 >= rate || 6 < rate);
do {years = parseFloat(prompt('Enter the number of years you plan on investing for'))
} while (isNaN(years) || 0 >= years || 30 <= years)

// CALCULATE FUTURE VALUE
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}
// DISPLAY RESULTS
document.write(`Original Investment: $${investment}<br>Future Value: $${futureValue.toFixed(2)}<br>Over ${years} years, at a ${rate}% interest rate, you will make<br>` + (parseFloat(futureValue.toFixed(2) - investment.toFixed(2))))
