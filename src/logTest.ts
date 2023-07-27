import usPresidents from './presidents'
// import manipulateData from './manipulateData'
import utilities from './utilities'

export default function logTest() {
  const yesBtn = document.getElementById('yesButton') as HTMLButtonElement
  const noBtn = document.getElementById('noButton') as HTMLButtonElement
  const writeLetter = document.querySelector('.write-letter') as HTMLSpanElement
  let filteredUSPresidents: string[]

  //   This is an array of all presidents, lowercased
  const lowercasedPresidentsAll = usPresidents.map(utilities.toLower)

  const joinPresidentNames = (array: string[]) =>
    array.join('').replace(/ /g, '')
  // This joints all pres strings for the Set to work
  //   const joinedPresString = lowercasedPresidentsAll.join('').replace(/ /g, '')

  let joinedPresString: string = joinPresidentNames(lowercasedPresidentsAll)

  //   This creates the available letters for random guessing
  const getUniqueLetters = (array: string) => [...new Set(array)].sort()
  // this applies that function
  let availableLettersArr: string[] = getUniqueLetters(joinedPresString)

  const getRandomElementFromArray = (arr: string[]): string => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return '' // Return empty string if the input is not an array or it's empty
    }

    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

  //   let randomLetter =
  //     availableLettersArr[Math.floor(Math.random() * availableLettersArr.length)]

  //   writeLetter.innerHTML = randomLetter
  writeLetter.innerHTML = getRandomElementFromArray(availableLettersArr)

  yesBtn.addEventListener('click', () => {
    // this will filter the presidents array
    // to remove presidents without the Yes letter
    let randomLetter = getRandomElementFromArray(availableLettersArr)

    writeLetter.innerHTML = randomLetter
  })

  noBtn.addEventListener('click', () => {
    // this will filter the presidents array
    // to remove presidents with the No letter
    let randomLetter = getRandomElementFromArray(availableLettersArr)

    writeLetter.innerHTML = randomLetter
  })
}
