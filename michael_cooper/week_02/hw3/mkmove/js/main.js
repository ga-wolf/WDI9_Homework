console.log('superfunhappysubzero');

var img = 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/mortalcombatsubzeroanimation-8.gif';

var element = document.getElementById('subzero');
element.style.left = 0;
element.style.top = 0;
element.style.position = 'absolute';

function leftArrowPressed() {
  if (!(element.src === 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/mortalcombatsubzeroanimation-8.gif')) {
    element.src = 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/mortalcombatsubzeroanimation-8.gif';
    element.style.transform = 'scale(-1,1)'
  }

  element.style.left = parseInt(element.style.left) - 10 + 'px';
}

function rightArrowPressed() {
  if (!(element.src === 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/mortalcombatsubzeroanimation-8.gif')) {
    element.src = 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/mortalcombatsubzeroanimation-8.gif';
    element.style.transform = 'scale(1,1)'
  }
  element.style.left = parseInt(element.style.left) + 10 + 'px';

}

function freezeFloor() {
  if (!(element.src === 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/subzeromortalkombatanimation-27.gif')) {
    element.src = 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/subzeromortalkombatanimation-27.gif';
    if (element.style.transform === 'scale(-1, 1)') {
      element.style.left = parseInt(element.style.left) - 140 + 'px';
    }
  }
}

function returnRight() {
  element.src = 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/subzeroanimation-12.gif';
  element.style.transform = 'scale(1,1)'
}

function returnLeft() {
  element.src = 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/subzeroanimation-12.gif';
  element.style.transform = 'scale(-1,1)'
}

function freezeRelease() {
  element.src = 'http://bestanimations.com/Games/Computer/MortalCombat/Subzero/subzeroanimation-12.gif';
  if (element.style.transform === 'scale(-1, 1)') {
    element.style.left = parseInt(element.style.left) + 140 + 'px';
  }
}

function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 32:
      freezeFloor();
      break;
  }
};

function moveSelection2(evt) {
  switch (evt.keyCode) {
    case 37:
      returnLeft();
      break;
    case 39:
      returnRight();
      break;
    case 32:
      freezeRelease();
      break;
  }
};

window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moveSelection2);
