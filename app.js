const keys = document.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')

//Research addEventListerner more to learn about it
keys.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    if (displayedNum === '0') {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }

    if (!action) {
      console.log('number key')
    }

    if (action === 'plus' || action === 'minus' || action === 'muitiply' || action === 'divide') {
      console.log('operator key')
    }

    if (action === 'decimal') {
      console.log('decimal key')
    }

    if (action === 'clear') {
      display.textContent = '0' //Need to actually find a logic to clear the display instead of setting it to 0
      console.log('clear key')
    }

    if (action === 'equals') {
      console.log('equal key')
    }
  }
})

//Buttons
//Need to give logic to the specific buttons when pressed, cant really put my head around it for now
//Redundant code?

// document.querySelector('#zero').onclick = () => {
//   console.log('0 Pressed')
//   document.querySelector('#display').innerHTML = 'Test'
// }

// document.querySelector('#one').onclick = () => {
//   console.log('1 Pressed')
// }

// document.querySelector('#two').onclick = () => {
//   console.log('2 Pressed')
// }

// document.querySelector('#three').onclick = () => {
//   console.log('3 Pressed')
// }

// document.querySelector('#four').onclick = () => {
//   console.log('4 Pressed')
// }

// document.querySelector('#five').onclick = () => {
//   console.log('5 Pressed')
// }

// document.querySelector('#six').onclick = () => {
//   console.log('6 Pressed')
// }

// document.querySelector('#seven').onclick = () => {
//   console.log('7 Pressed')
// }

// document.querySelector('#eight').onclick = () => {
//   console.log('8 Pressed')
// }

// document.querySelector('#nine').onclick = () => {
//   console.log('9 Pressed')
// }

// document.querySelector('#equals').onclick = () => {
//   console.log('= Pressed')
// }

// document.querySelector('#plus').onclick = () => {
//   console.log('+ Pressed')
// }

// document.querySelector('#minus').onclick = () => {
//   console.log('- Pressed')
// }

// document.querySelector('#multiply').onclick = () => {
//   console.log('x Pressed')
// }

// document.querySelector('#divide').onclick = () => {
//   console.log('÷ Pressed')
// }

// document.querySelector('#decimal').onclick = () => {
//   console.log(', Pressed')
// }

// document.querySelector('#clear').onclick = () => {
//   console.log('CLEAR Pressed')
//   document.querySelector('#display').innerHTML = 'Clear test'
// }
