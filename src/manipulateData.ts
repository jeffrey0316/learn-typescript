// import usPresidents from './presidents'
import utilities from './utilities'

export default function manipulateData(arr: string[]) {
  // lowercase every letter in a president's name
  const lowercasedPresidents = arr.map(utilities.toLower)

  // join every array string together into one long string
  const joinedPresString = lowercasedPresidents.join('').replace(/ /g, '')

  // remove non-unique letters from long string
  // store in an array and sort alphabetically descending
  // results in an array of strings from a-z
  const getUniqueLetters = (array: string) => [...new Set(array)].sort()

  const availableLettersArr: string[] = getUniqueLetters(joinedPresString)

  const randomLetter =
    availableLettersArr[Math.floor(Math.random() * availableLettersArr.length)]

  return randomLetter
}
