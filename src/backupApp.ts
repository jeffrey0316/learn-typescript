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
