// Assuming you have the usPresidents array defined as shown in the previous response.
import usPresidents from './presidents'
import utilities from './utilities'
import startGame from './startGame'

window.addEventListener('load', () => {
  // Function to create and populate the select dropdown with dynamic options
  const selectElement = document.getElementById(
    'presidentsSelect'
  ) as HTMLSelectElement

  function manipulateData() {
    const lowercasedPresidents = usPresidents.map(utilities.toLower)

    const getUniqueLetters = (array: string) => [...new Set(array)].sort()
    //   const uniqueLetters = utilities.unique(lowercasedPresidents)
    //   console.log(uniqueLetters)

    const joinedPresString = lowercasedPresidents.join('').replace(/ /g, '')

    console.log(getUniqueLetters(joinedPresString))
  }

  function populatePresidentsSelect() {
    // Loop through the usPresidents array and create an option element for each president
    usPresidents.forEach((president) => {
      const option = document.createElement('option')
      option.text = president
      option.value = president // You can set the value to some unique identifier if needed
      selectElement.appendChild(option)
    })
  }

  //   function startGame() {
  //     const introBox = document.querySelector('.game-rules') as HTMLElement
  //     const questionBox = document.querySelector(
  //       '.written-guesses'
  //     ) as HTMLElement
  //     const introBtn = document.getElementById('intro-btn') as HTMLButtonElement

  //     introBtn.addEventListener('click', () => {
  //       selectElement.disabled = true
  //       console.log('begin!')
  //       introBox.style.display = 'none'
  //       introBtn.style.display = 'none'
  //       questionBox.style.display = 'flex'
  //       logTest()
  //     })
  //   }

  //   function logTest() {
  //     const yesBtn = document.getElementById('yesButton') as HTMLButtonElement
  //     const noBtn = document.getElementById('noButton') as HTMLButtonElement
  //     yesBtn.addEventListener('click', () => console.log('clicked'))
  //     noBtn.addEventListener('click', () => console.log('clicked'))
  //   }

  // Call the function to populate the select dropdown on page load

  manipulateData()

  populatePresidentsSelect()

  startGame()
})

/*
import usPresidents from './presidents'
// import manipulateData from './manipulateData'
import utilities from './utilities'

export default function runGame() {
  const yesBtn = document.getElementById('yesButton') as HTMLButtonElement
  const noBtn = document.getElementById('noButton') as HTMLButtonElement
  const writeLetter = document.querySelector('.write-letter') as HTMLSpanElement
  const usedLettersSpan = document.getElementById(
    'used-letters'
  ) as HTMLSpanElement

  let lowercasedPresidentsAll = usPresidents.map(utilities.toLower)

  const usedLetters: string[] = []

  const joinPresidentNames = (array: string[]) =>
    array.join('').replace(/ /g, '')
  let joinedPresString: string = joinPresidentNames(lowercasedPresidentsAll)

  const getUniqueLetters = (array: string) => [...new Set(array)].sort()
  let availableLettersArr: string[] = getUniqueLetters(joinedPresString)

  let randomIndex: number

  const getRandomElementFromArray = (arr: string[]): string => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return ''
    }

    randomIndex = Math.floor(Math.random() * arr.length)
    if (usedLetters.includes(arr[randomIndex])) {
      getRandomElementFromArray(arr)
    }
    return arr[randomIndex]
  }

  let count: number = 4
  let randomLetter = getRandomElementFromArray(availableLettersArr)

  usedLetters.push(randomLetter)

  writeLetter.innerHTML = randomLetter
  usedLettersSpan.innerHTML = usedLetters.join(' ')
  yesBtn.addEventListener('click', () => {
    // this will filter the presidents array
    // to remove presidents without the Yes letter

    lowercasedPresidentsAll = lowercasedPresidentsAll.filter((president) =>
      president.includes(randomLetter)
    )
    joinedPresString = joinPresidentNames(lowercasedPresidentsAll)

    availableLettersArr = getUniqueLetters(joinedPresString)

    randomLetter = getRandomElementFromArray(availableLettersArr)

    usedLetters.push(randomLetter)

    writeLetter.innerHTML = randomLetter
    usedLettersSpan.innerHTML = usedLetters.join(' ')
  })

  noBtn.addEventListener('click', () => {
    lowercasedPresidentsAll = lowercasedPresidentsAll.filter(
      (president) => !president.includes(randomLetter)
    )

    randomLetter = getRandomElementFromArray(availableLettersArr)

    usedLetters.push(randomLetter)

    writeLetter.innerHTML = randomLetter
    usedLettersSpan.innerHTML = usedLetters.join(' ')
  })
}

*/
