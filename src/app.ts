// Assuming you have the usPresidents array defined as shown in the previous response.
import startGame from './game/startGame'
import populatePresidentsSelect from './utils/populatePresidentsSelect'

window.addEventListener('load', () => {
  populatePresidentsSelect()

  startGame()
})
