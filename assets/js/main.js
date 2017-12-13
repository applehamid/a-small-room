/*these functions change the story text after the player has made a choice*/

const homePage = document.getElementById('startGame')
const allSituations = document.getElementsByClassName('situation')

function redPotion() {
  document.getElementById('strengthChoice').classList.remove('hide')
  document.getElementById('startGame').classList.add('hide')
}

function goldPotion() {
  document.getElementById('magicChoice').classList.remove('hide')
  document.getElementById('startGame').classList.add('hide')
}

function blackPotion() {
  document.getElementById('deathChoice').classList.remove('hide')
  document.getElementById('startGame').classList.add('hide')
}

function startOver() {
  // if (homePage.className = 'hide') {
  //   homePage.getElementById.remove('hide')
  // }
  // if (allSituations.classList !== 'hide') {
  //   allSituations.classList.add('hide')
  // }

  homePage.classList.remove('hide')
  // allSituations.classList.add('hide')
  document.getElementById('deathChoice').classList.add('hide')
  document.getElementById('strengthChoice').classList.add('hide')
  document.getElementById('magicChoice').classList.add('hide')
}

function insideCave() {
  document.getElementById('insidethecave').classList.remove('hide')
  document.getElementById('strengthChoice').classList.add('hide')
  document.getElementById('magicChoice').classList.add('hide')
}

// function lightMatch()
