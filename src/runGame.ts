import usPresidents from './presidents'
import utilities from './utilities'

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

  let lowercasedPresidentsAll = usPresidents.map(utilities.toLower)
  let joinedPresString: string = lowercasedPresidentsAll
    .join('')
    .replace(/ /g, '')

  const usedLetters: string[] = []
  let availableLettersArr: string[] = [...new Set(joinedPresString)].sort()
  let randomLetter: string
  let computerGuesses: number = 4
  let gameOver: boolean = false

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
    if (computerGuesses <= 0) {
      writtenLetters.innerHTML = `Is your president ${
        lowercasedPresidentsAll[
          Math.floor(Math.random() * lowercasedPresidentsAll.length)
        ]
      }?`
      remainingPresidents.innerHTML = ''
      gameOver = true
    }
  }

  function handleClick(isYesButton: boolean) {
    lowercasedPresidentsAll = lowercasedPresidentsAll.filter((president) =>
      isYesButton
        ? president.includes(randomLetter)
        : !president.includes(randomLetter)
    )
    console.log(lowercasedPresidentsAll)

    joinedPresString = lowercasedPresidentsAll.join('').replace(/ /g, '')
    availableLettersArr = [...new Set(joinedPresString)].sort()

    randomLetter = getRandomElementFromArray(availableLettersArr)
    usedLetters.push(randomLetter)
    computerGuesses--

    updateLetterAndLettersSpan()

    if (gameOver && isYesButton && computerGuesses < 0) {
      document.documentElement.style.setProperty(
        '--background-color',
        '#00b894'
      )
      document.documentElement.style.setProperty(
        '--foreground-color',
        '#000000'
      )
      writtenLetters.innerHTML = `I win!`
      console.log('I win!')
    }
    if (gameOver && !isYesButton && computerGuesses < 0) {
      document.documentElement.style.setProperty(
        '--background-color',
        '#e74c3c'
      )
      document.documentElement.style.setProperty(
        '--foreground-color',
        '#000000'
      )
      writtenLetters.innerHTML = `I lose!`
      console.log('I lost!')
    }
  }

  yesBtn.addEventListener('click', () => handleClick(true))
  noBtn.addEventListener('click', () => handleClick(false))

  // Initial setup
  randomLetter = getRandomElementFromArray(availableLettersArr)
  usedLetters.push(randomLetter)
  updateLetterAndLettersSpan()
}
