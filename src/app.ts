// Assuming you have the usPresidents array defined as shown in the previous response.
import startGame from './startGame'
import populatePresidentsSelect from './populatePresidentsSelect'

window.addEventListener('load', () => {
  populatePresidentsSelect()

  startGame()
})
