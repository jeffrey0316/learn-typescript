import usPresidents from '../data/presidents'

export default function runGame() {
  const yesBtn = document.getElementById('yesButton') as HTMLButtonElement
  const noBtn = document.getElementById('noButton') as HTMLButtonElement
  const writeLetter = document.querySelector('.write-letter') as HTMLSpanElement
  const usedLettersSpan = document.getElementById(
    'used-letters'
  ) as HTMLSpanElement
  const writtenLetters = document.getElementById(
    'written-guesses'
  ) as HTMLHeadingElement
  const remainingPresidents = document.getElementById(
    'remaining-presidents'
  ) as HTMLParagraphElement

  let lowercasedPresidentsAll: string[]
  let joinedPresString: string
  let usedLetters: string[]
  let availableLettersArr: string[]
  let randomLetter: string
  let computerGuesses: number
  let gameOver: boolean

  function initializeGame() {
    lowercasedPresidentsAll = usPresidents.map((president) =>
      president.toLowerCase()
    )
    joinedPresString = lowercasedPresidentsAll.join('').replace(/ /g, '')
    usedLetters = []
    availableLettersArr = [...new Set(joinedPresString)].sort()
    randomLetter = getRandomElementFromArray(availableLettersArr)
    computerGuesses = 4
    gameOver = false

    updateLetterAndLettersSpan()
  }

  function getRandomElementFromArray(arr: string[]): string {
    if (!Array.isArray(arr) || arr.length === 0) {
      return ''
    }

    const randomIndex = Math.floor(Math.random() * arr.length)
    if (usedLetters.includes(arr[randomIndex])) {
      return getRandomElementFromArray(arr)
    }

    return arr[randomIndex]
  }

  function updateLetterAndLettersSpan() {
    if (gameOver === false) {
      writeLetter.innerHTML = randomLetter
      usedLettersSpan.innerHTML = usedLetters.join(' ')
      remainingPresidents.innerHTML = lowercasedPresidentsAll.join(' ')
    }
    if (computerGuesses < 0) {
      writtenLetters.innerHTML = `Is your president ${
        lowercasedPresidentsAll[
          Math.floor(Math.random() * lowercasedPresidentsAll.length)
        ]
      }?`

      remainingPresidents.innerHTML = ''
      gameOver = true
    }
    if (computerGuesses < -1) {
      usedLettersSpan.innerHTML = ''
    }
  }

  function handleClick(isYesButton: boolean) {
    lowercasedPresidentsAll = lowercasedPresidentsAll.filter((president) =>
      isYesButton
        ? president.includes(randomLetter)
        : !president.includes(randomLetter)
    )

    joinedPresString = lowercasedPresidentsAll.join('').replace(/ /g, '')
    availableLettersArr = [...new Set(joinedPresString)].sort()

    randomLetter = getRandomElementFromArray(availableLettersArr)
    usedLetters.push(randomLetter)
    computerGuesses--

    updateLetterAndLettersSpan()

    if (gameOver && isYesButton && computerGuesses < -1) {
      handleGameOver(true)
    }
    if (gameOver && !isYesButton && computerGuesses < -1) {
      handleGameOver(false)
    }
  }

  function handleGameOver(isWin: boolean) {
    if (isWin) {
      document.documentElement.style.setProperty('--color-primary', '#00b894')
      document.documentElement.style.setProperty('--color-secondary', '#000000')
      writtenLetters.innerHTML = 'I win!'
      console.log('I win!')
    } else {
      document.documentElement.style.setProperty('--color-primary', '#e74c3c')
      document.documentElement.style.setProperty('--color-secondary', '#000000')
      writtenLetters.innerHTML = 'I lose!'
      console.log('I lost!')
    }
  }

  yesBtn.addEventListener('click', () => handleClick(true))
  noBtn.addEventListener('click', () => handleClick(false))

  // Initial setup
  initializeGame()
}
