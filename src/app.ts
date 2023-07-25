// Assuming you have the usPresidents array defined as shown in the previous response.
import usPresidents from './presidents'

// Function to create and populate the select dropdown with dynamic options
function populatePresidentsSelect() {
  const selectElement = document.getElementById(
    'presidentsSelect'
  ) as HTMLSelectElement

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

  log.addEventListener('click', () => console.log('begin!'))
}

// Call the function to populate the select dropdown on page load
window.addEventListener('load', () => {
  populatePresidentsSelect()
  startGame()
})
