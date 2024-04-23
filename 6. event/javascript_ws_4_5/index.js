const scissorsButton = document.querySelector('#scissors-button')
const rockButton = document.querySelector('#rock-button')
const paperButton = document.querySelector('#paper-button')
const players = document.querySelectorAll('.player')

let nIntervId

const buttonClickHandle = function(playerChoice1) {
  console.log(playerChoice1)
  scissorsButton.setAttribute('disabled', null)
  rockButton.setAttribute('disabled', null)
  paperButton.setAttribute('disabled', null)
  
  players[0].querySelector('img').src = `./img/${playerChoice1}.png`
  const player2 = ['rock', 'scissors', 'paper']
  const playerChoice2 = player2[getRandomInt(3)]
  const result = playGame(playerChoice1, playerChoice2)
  setTimeout(stopChangeImage, 3000, playerChoice2, result)
  changeImage()
  console.log(result)
}

const clickHandle = function(event) {
  const choice = event.srcElement.alt
  buttonClickHandle(choice)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function changeImage() {
  if (!nIntervId) {
    nIntervId = setInterval(imgChange, 100)
    // console.log(nIntervId)
  }
}

function imgChange() {
  const choiceRadom = ['rock', 'scissors', 'paper']
  players[1].querySelector('img').src = `./img/${choiceRadom[getRandomInt(3)]}.png`
}

function stopChangeImage(playerChoice2, result) {
  clearInterval(nIntervId);
  nIntervId = null;
  changeScore(result)
  players[1].querySelector('img').src = `./img/${playerChoice2}.png`
  diplayModal(result)
  

}

const playGame = function (player1, player2) {
  if (player1 === 'scissors') {
    if (player2 === 'rock') {
      return 2
    } else if (player2 == 'paper'){
      return 1
    }
  } else if (player1 === 'rock') {
    if (player2 === 'paper') {
      return 2
    } else if (player2 == 'scissors'){
      return 1
    }
  } else if (player1 === 'paper') {
    if (player2 === 'scissors') {
      return 2
    } else if (player2 == 'rock'){
      return 1
    }
  } else {
    return 0
  }
}

const changeScore = function(result) {
  if (result === 1) {
    const countA = document.querySelector('.countA')
    let count = parseInt(countA.textContent)
    count += 1
    countA.textContent = count
  } else if (result == 2) {
    const countB = document.querySelector('.countB')
    let count = parseInt(countB.textContent)
    count += 1
    countB.textContent = count
  }
}

const diplayModal = function(result) {
  const modalTag = document.querySelector('.modal')
  const modalContent = document.querySelector('.modal-content')
  if (result === 1) {
    modalContent.textContent = 'Player1 Win!'
  } else if (result === 2) {
    modalContent.textContent = 'Player2 Win!'
  } else {
    modalContent.textContent = '무승부!'
  }
  modalTag.style = 'display: flex'
  modalTag.addEventListener('click', function() {
    this.style = 'display: none'
    resetGame()
  })
}

const resetGame = function() {
  scissorsButton.removeAttribute('disabled')
  rockButton.removeAttribute('disabled')
  paperButton.removeAttribute('disabled')
}



scissorsButton.addEventListener('click', clickHandle)
rockButton.addEventListener('click', clickHandle)
paperButton.addEventListener('click', clickHandle)

