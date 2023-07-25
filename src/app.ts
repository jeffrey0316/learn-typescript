// Assuming you have the usPresidents array defined as shown in the previous response.
import usPresidents from './presidents'
import utilities from './utilities'

window.addEventListener('load', () => {
  // Function to create and populate the select dropdown with dynamic options
  const selectElement = document.getElementById(
    'presidentsSelect'
  ) as HTMLSelectElement

  console.log(usPresidents)
  const lowercasedPresidents = usPresidents.map(utilities.toLower)
  console.log(lowercasedPresidents)
  //   const uniqueLetters = utilities.unique(lowercasedPresidents)
  //   console.log(uniqueLetters)

  function populatePresidentsSelect() {
    // Loop through the usPresidents array and create an option element for each president
    usPresidents.forEach((president) => {
      const option = document.createElement('option')
      option.text = president
      option.value = president // You can set the value to some unique identifier if needed
      selectElement.appendChild(option)
    })
  }

  function startGame() {
    const log = document.getElementById('intro-btn') as HTMLButtonElement

    log.addEventListener('click', () => {
      selectElement.disabled = true
      console.log('begin!')
    })
  }

  // Call the function to populate the select dropdown on page load

  populatePresidentsSelect()

  startGame()
})
