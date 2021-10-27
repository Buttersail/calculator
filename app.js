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

    //Figure out a way to see what operator is clicked during calculations
    if (action === 'plus' || action === 'minus' || action === 'multiply' || action === 'divide') {
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
      console.log('operator key')
    }

    //Redundant for now, doesn't work
    if (action === 'decimal') {
      display.textContent = displayedNum + ','
      console.log('decimal key')
    }

    if (action === 'clear') {
      display.textContent = '' //Need to actually find a logic to clear the display instead of setting it to none
      console.log('clear key')
    }

    //Pressing the equal key continues to calculate the numbers without pressing any numbers, fix this.
    if (action === 'equals') {
      let firstValue = calculator.dataset.firstValue
      let operator = calculator.dataset.operator
      let secondValue = displayedNum
      display.textContent = equalize(firstValue, operator, secondValue)
      console.log('equal key')
    }
  }
})

//To equalize the numbers you choose, parsing plus functionality to Int seems to work. Theory: Might be because we convert the values from String to Int so it dosn't concatenate them?
function equalize(numberOne, operator, numberTwo) {
  if (operator === 'plus') {
    result = parseInt(numberOne) + parseInt(numberTwo)
  } else if (operator === 'minus') {
    result = numberOne - numberTwo
  } else if (operator === 'multiply') {
    result = numberOne * numberTwo
  } else if (operator === 'divide') {
    result = numberOne / numberTwo
  }

  return result
}
