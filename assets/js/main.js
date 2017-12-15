/* Using const to define elements based on their ids in HTML, for future use
in the functions below */

const homePage = document.getElementById('startGame')
const allSituations = document.getElementsByClassName('situation')

/* These functions flow through the game map to change the storyboard text
after the player has chosen a potion. It acheives this through the addition
and removal of the class 'hide' which calls upon the css to display:none */

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

/* To create a start over button, I used the previously defined 'allSituations',
however because it is an array, it does not have a classlist. It contains many
elements which have their own list of classes.

In order to interact with the classes in the array of elements under 'allSituations',
we use the built-in javascript function Array.from() which allows us to use a function
on each element of the array. Here, we've created a conditional statement that applies
to all elements under 'allSituations'. Then, we are able to check if the element is hidden,
and if it is not, then we can hide it. */

function startOver() {
  homePage.classList.remove('hide')
  const nodeArray = Array.from(allSituations)
  nodeArray.forEach((situation) => {
    if (!situation.classList.contains('hide')) {
      situation.classList.add('hide')
    }
})
}

/* These functions continue to use classList.add and classList.remove to move the player
through the game map. */

function insideCave() {
  document.getElementById('insidethecave').classList.remove('hide')
  document.getElementById('strengthChoice').classList.add('hide')
  document.getElementById('magicChoice').classList.add('hide')
}

function lightMatch() {
  document.getElementById('chooseweapon').classList.remove('hide')
  document.getElementById('insidethecave').classList.add('hide')
}

function chooseMallet() {
  document.getElementById('choosemallet').classList.remove('hide')
  document.getElementById('chooseweapon').classList.add('hide')
}

function chooseAxe() {
  document.getElementById('chooseaxe').classList.remove('hide')
  document.getElementById('chooseweapon').classList.add('hide')
}

function chooseShovel() {
  document.getElementById('chooseshovel').classList.remove('hide')
  document.getElementById('chooseweapon').classList.add('hide')
}

/* This const defines an element that applies to all weapon choices in the game, to be used
in the function below */

const allWeapons = document.getElementsByClassName('weapon')

/* This function uses Array.from() again to hide all other elements of the game map once a
weapon is chosen. This is a way to ensure the elements are hidden, regardless of which button
was chosen by the player. */

function openDoor() {
  document.getElementById('opendoor').classList.remove('hide')
  const nodeArray = Array.from(allWeapons)
  nodeArray.forEach((weapon) => {
    if (!weapon.classList.contains('hide')) {
      weapon.classList.add('hide')
    }
})
}

function useWeapon() {
  document.getElementById('useweapon').classList.remove('hide')
  document.getElementById('opendoor').classList.add('hide')
}

/* Define a const for the background image for fade-in function below */

const img = document.getElementById('imgbkg')

/* To create a function for the background image to fade-in upon loading the page.
Set the opacity of the image to 0, create a function that increasing the opacity of
the image, then create a conditional statement using javascript's built-in
window.requestAnimationFrame which performs the animation, set to the time frame
indicated by 'tick' */

function fadeIn(img) {
  img.style.opacity = 0
  const tick = function() {
    img.style.opacity = +img.style.opacity + 0.001

    if (+img.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 70)
    }
  }

  tick()
}

fadeIn(img)
