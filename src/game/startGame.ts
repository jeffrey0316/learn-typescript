import runGame from './runGame'

export default function startGame() {
  const selectElement = document.getElementById(
    'presidentsSelect'
  ) as HTMLSelectElement
  const introBox = document.querySelector('.game-rules') as HTMLElement
  const questionBox = document.querySelector('.written-guesses') as HTMLElement
  const introBtn = document.getElementById('intro-btn') as HTMLButtonElement

  introBtn.addEventListener('click', handleIntroBtnClick)

  function handleIntroBtnClick() {
    selectElement.disabled = true
    introBox.style.display = 'none'
    introBtn.style.display = 'none'
    questionBox.style.display = 'flex'
    runGame()
  }
}
