// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

var img = document.createElement('img')
img.src = 'mole.png'
img.style.width = '100%'
img.style.height = '100%'

const sound = new Audio('whack-audio.wav')

function displayMole() {
  // create a varialbe to store all table cells
  let cells = document.getElementsByTagName('td')
  // there are 25 table cells
  // create a random number from 0-24
  let randamIndex = Math.floor(Math.random() * 24)
  // choose a random cell to append the image
  let randamCell = cells[randamIndex]
  randamCell.appendChild(img)
}
displayMole()

function whackedMole() {
  // whackedMole function should remove the mole from the current cell
  img.addEventListener('click', () => {
    sound.play()
    img.remove()
  })
  // and then, using a function that lets
  //you re-use the code that you wrote earlier, add the mole to a new random cell
  displayMole()
}

whackedMole()
