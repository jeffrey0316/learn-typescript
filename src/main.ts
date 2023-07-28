import './app'
import './styles.css'

function generateHTML(): string {
  return `
    <div>
      <header class='header'>
        <h1 class='h1'>Presidential Guessing Game!</h1>
      </header>

      <section class='game-rules'>
        <h2>Want to play? The instructions are simple:</h2>
        <ol class='game-rules-list'>
          <li>Select a U.S. President to guess from the dropdown</li>
          <li>Click 'Start Game'</li>
          <li>The computer will ask 5 questions</li>
          <ol style="list-style-type: lower-alpha;">
            <li>Then try to guess your pick</li>
          </ol>
          <li>If the computer guesses incorrectly, you win!</li>
          <li>Otherwise, you owe me $5 dollars.</li>
        </ol>
        <p class="disclaimer"><em>Note! The computer considers middle names.</em></p>
        <p><strong>Ready?</strong></p>
      </section>

      <section style="display: none" class='written-guesses'>
        <h2 id="written-guesses">Does Your President Contain the Letter: <span class="write-letter">X</span>?</h2>
        <div class='letter-buttons-y-n'>
          <button id="yesButton">Yes</button>
          <button id="noButton">No</button>
        </div>
      </section>
      <p class="used-letters"><span id="used-letters"></span></p>

      <select class='select' id="presidentsSelect">
        <!-- Dynamic options will be added here -->
      </select>

      <p id="remaining-presidents"></p>

      <button id="intro-btn" class="btn">START GAME</button>
    </div>
  `
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = generateHTML()
