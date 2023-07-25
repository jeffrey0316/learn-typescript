import './app'
import './styles.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<header class='header'><h1 class='h1'>Presidential Guessing Game!</h1></header>

<section class='game-rules'>
<h2>Want to play? The instructions are simple:</h2>
<ol class='game-rules-list'>
    <li>Choose any U.S. President (past or present)</li>
    <li>The computer will ask 5 questions</li>
    <ol style="list-style-type: lower-alpha;">
        <li>Then try to guess your pick</li>
    </ol>
    <li>If the computer guesses incorrectly, you win!</li>
    <li>Otherwise, you owe me $5 dollars.</li>
</ol>
<p>Note! The computer considers middle names.</p>
<p>Ready to begin?</p>
</section>

    <button id="intro-btn" class="btn">START GAME
    </button>


<select class='select' id="presidentsSelect">
<!-- Dynamic options will be added here -->
</select>

</div>
`
