// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

const unicorn1 = document.getElementById('unicorn1')
const unicorn2 = document.getElementById('unicorn2')
const unicorn3 = document.getElementById('unicorn3')

var imgCount1 = -1
var imgCount2 = -1
var imgCount3 = -1
var imageSource = [
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png',
]

//create onClick() function for Unicorn 1

function myFunction_1() {
  var unicorn1 = document.getElementById('unicorn1')

  if (imgCount1 < imageSource.length - 1) {
    imgCount1++
    unicorn1.src = imageSource[imgCount1]
    playAudio('blow')
  } else {
    playAudio('happy')
    alert('Unicorn Number 1 says thank you!')
  }
}

//create onClick() function for Unicorn 2

function myFunction_2() {
  var unicorn2 = document.getElementById('unicorn2')

  if (imgCount2 < imageSource.length - 1) {
    imgCount2++
    unicorn2.src = imageSource[imgCount2]
    playAudio('blow')
  } else {
    playAudio('happy')
    alert('Unicorn Number 2 says thank you!')
  }
}

//create onClick() function for Unicorn 3

function myFunction_3() {
  var unicorn3 = document.getElementById('unicorn3')

  if (imgCount3 < imageSource.length - 1) {
    imgCount3++
    unicorn3.src = imageSource[imgCount3]
    playAudio('blow')
  } else {
    playAudio('happy')
    alert('Unicorn Number 3 says thank you!')
  }
  ß
}

//Function to play sounds
function playAudio(id) {
  document.getElementById(id).play()
}
