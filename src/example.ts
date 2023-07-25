// Declare an array of Presidents
// Note 1: Middle names have been added for most or all. Harry Truman's middle name is literally 'S.'
// Note 2: Repeats have been removed (1 or 2 tenures are irrelevant; Grover Cleveland was President twice)
let presidentsArray: string[] = [
  'George Washington',
  'John Adams',
  'Thomas Jefferson',
  'James Madison',
  'James Monroe',
  'John Quincy Adams',
  'Andrew Jackson',
  'Martin Van Buren',
  'William Henry Harrison',
  'John Tyler',
  'James Knox Polk',
  'Zachary Taylor',
  'Millard Fillmore',
  'Franklin Pierce',
  'James Buchanan',
  'Abraham Lincoln',
  'Andrew Johnson',
  'Ulysses Simpson Grant',
  'Rutherford Birchard Hayes',
  'James Abram Garfield',
  'Chester Alan Arthur',
  'Grover Cleveland',
  'Benjamin Harrison',
  'William McKinley',
  'Theodore Roosevelt',
  'William Howard Taft',
  'Woodrow Wilson',
  'Warren Gamaliel Harding',
  'Calvin Coolidge',
  'Herbert Clark Hoover',
  'Franklin Delano Roosevelt',
  'Harry S Truman',
  'Dwight David Eisenhower',
  'John Fitzgerald Kennedy',
  'Lyndon Baines Johnson',
  'Richard Milhous Nixon',
  'Gerald Rudolph Ford',
  'Jimmy Earl Carter',
  'Ronald Wilson Reagan',
  'George Herbert Walker Bush',
  'Bill Jefferson Clinton',
  'George Walker Bush',
  'Barack Hussein Obama',
  'Donald John Trump',
  'Joseph Robinette Biden',
]

// Map new array with every President's name to lowercase
let presArrToLowerCase: string[] = presidentsArray.map((pres) =>
  pres.toLowerCase()
)

// Declare an array of every letter in the English alphabet
let letters: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')

// Get the test Element I want to write the President to
let getPres = document.getElementById('write-president')

// Capture the content of our game (introduction, then the game itself)
let introText = document.getElementById('intro-text')
let gameContent = document.getElementById('game-content')
if (gameContent) {
  gameContent.style.display = 'none'
}

// Grab id of 'Begin!' start button
let beginBtn = document.getElementById('start-btn')

// Grad id of 'START GAME' button
let introBtn = document.getElementById('intro-btn')

// set count to 0 so the computer guesses 5 times (asks 5 questions - those questions are 5 "random" letters)
let count = 0
// set guesses to 5 so the computer prompts the User to confirm Y/N 5 times when 'startGameBtn' is clicked
let guesses = 5

// When clicked, hide the intro box and display the game content box
if (introBtn) {
  introBtn.addEventListener('click', (e) => {
    e.preventDefault()
    introText.style.display = 'none'
    gameContent.style.display = 'block'
  })
}

// Transform a string into an object of unique letters from the above array, then spread them into an array
const getUniqueLetters = (array: string[]) => [...new Set(array)].sort()

// This will clean an array, turn it into one string with no special characters
// Assign it to a new array, then that new array will be spread into individual characters, stripped of all duplicates
const randomEnhancer = (array: string[], array2: string[]) => {
  array = array2.join('').replace(/ /g, '')
  array = getUniqueLetters(array)
  return array
}

// Basically, compare array 1 to array 2. These will contain letters/string characters.
// For the length of the second array, filter the first array so that it does not contain any letters from the second array.
let filterUsedLetters = (array: string[], array2: string[]) => {
  for (let j = 0; j < array2.length; j++) {
    array = array.filter((arr) => !arr.match(RegExp(array2[j], 'g')))
  }
}

let usedLetters: string[] = []

// Declare a function that grabs a random letter from the letters array
let randomLetter = (array: string[], array2: string[]) => {
  filterUsedLetters(array, array2)
  return array[Math.floor(Math.random() * array.length)]
}

// This begins the game, that will loop for n amount of guesses (see above), and filter an array of remaining options each time
beginBtn.addEventListener('click', (e) => {
  e.preventDefault()

  for (count; count < guesses; count++) {
    letters = randomEnhancer(letters, presArrToLowerCase)
    let randLetter = randomLetter(letters, usedLetters)
    usedLetters.push(randLetter)
    let answer = confirm(
      `Does your President's name contain the letter '${randLetter.toUpperCase()}'?`
    )
    if (answer) {
      presArrToLowerCase = presArrToLowerCase.filter((president) =>
        president.match(RegExp(randLetter, 'g'))
      )
      randomEnhancer(letters, presArrToLowerCase)
    } else {
      presArrToLowerCase = presArrToLowerCase.filter(
        (president) => !president.match(RegExp(randLetter, 'g'))
      )
      randomEnhancer(letters, presArrToLowerCase)
    }
  }

  let compSelection =
    presArrToLowerCase[Math.floor(Math.random() * presArrToLowerCase.length)]
  compSelection = String(compSelection)
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ')

  let finalAnswer = confirm(`
        Did you pick ${compSelection}?
    `)
  // console.log(compSelection);
  // console.log(finalAnswer);
  getPres.innerHTML = compSelection.toUpperCase()
})
