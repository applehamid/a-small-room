/* these functions change the story text after the player has chosen a potion */

function redPotion() {
  document.getElementById("storyboard").innerHTML = "You feel a warmth radiate throughout your muscles. You clench your fists and feel an overwhelming sense of power. A door appears across the room and you walk towards it, flinging the door open unintentionally with your newfound strength..."
  document.getElementById("redPotion").innerHTML = "Proceed through the door";
  document.getElementById("goldPotion").style.visibility = "hidden";
  document.getElementById("blackPotion").style.visibility = "hidden";
}

function goldPotion() {
  document.getElementById("storyboard").innerHTML = "You feel a lightness float throughout your body. A door appears across the room and you walk towards it, your feet gliding on the door. The door opens quietly as you get closer to it, without you lifting a finger..."
  document.getElementById("redPotion").style.visibility = "hidden";
  document.getElementById("goldPotion").innerHTML = "Proceed through the door";
  document.getElementById("blackPotion").style.visibility = "hidden";
}

function blackPotion() {
  document.getElementById("storyboard").innerHTML = "You feel a cold chill run through you and start to shiver uncontrollably. You fall to the floor as the light from the candle grows dimmer and your eyes close..."
  document.getElementById("redPotion").style.visibility = "hidden";
  document.getElementById("goldPotion").style.visibility = "hidden";
  document.getElementById("blackPotion").innerHTML = "Start over";
}
