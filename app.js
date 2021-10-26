const keys = document.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')
const calculator = document.querySelector('.calculator')

//Research addEventListerner more to learn about it
keys.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    if (!action) {
      display.textContent = keyContent
      console.log('number key')
    }

    if (action === 'plus' || action === 'minus' || action === 'multiply' || action === 'divide') {
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
      console.log('operator key')
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + ','
      console.log('decimal key')
    }

    if (action === 'clear') {
      display.textContent = '' //Need to actually find a logic to clear the display instead of setting it to none
      console.log('clear key')
    }

    if (action === 'equals') {
      let firstValue = calculator.dataset.firstValue
      let operator = calculator.dataset.operator
      let secondValue = displayedNum
      display.textContent = equalize(firstValue, operator, secondValue)
      console.log('equal key')
    }
  }
})

//To equalize the numbers you choose, but plus doesn't seem to work compared to the others?
function equalize(numberOne, operator, numberTwo) {
  if (operator === 'plus') {
    result = numberOne + numberTwo
  } else if (operator === 'minus') {
    result = numberOne - numberTwo
  } else if (operator === 'multiply') {
    result = numberOne * numberTwo
  } else if (operator === 'divide') {
    result = numberOne / numberTwo
  }

  return result
}
