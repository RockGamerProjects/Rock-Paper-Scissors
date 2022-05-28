startRound()
function startRound() {
  var prompt = window.prompt('Move, R / P / S')
  let wonNot;
  let no = false;

  const options = ['Rock','Paper','Scissors']
  const number = Math.floor(Math.random()*3);
  const pCount = document.querySelector('.p-count')
  const cCount = document.querySelector('.c-count')

  if (prompt === 'R') {
    prompt = 'Rock'
    if (options[number] === 'Scissors') {
      wonNot = 'Won'
    }
  
    if (options[number] === 'Paper') {
      wonNot = 'Lost'
    }
  
    if (options[number] === 'Rock') {
      wonNot = 'Tied'
    }
  }

  if (prompt === 'P') {
    prompt = 'Paper'
    if (options[number] === 'Scissors') {
      wonNot = 'Lost'
    }
  
    if (options[number] === 'Paper') {
      wonNot = 'Tied'
    }
  
    if (options[number] === 'Rock') {
      wonNot = 'Won'
    }
  }

  if (prompt === 'S') {
    prompt = 'Scissors'
    if (options[number] === 'Scissors') {
      wonNot = 'Tied'
    }
  
    if (options[number] === 'Paper') {
      wonNot = 'Won'
    }
  
    if (options[number] === 'Rock') {
      wonNot = 'Lost'
    }
  }

  alert('You Played ' + prompt + '. Computer Played ' + options[number]  + '. You ' + wonNot, '.')

  if (wonNot == 'Won') {
    pCount.innerText = pCount.innerText + 1
  }
  else if (wonNot == 'Lost') {
    cCount.innerText = cCount.innerText + 1
  }
}