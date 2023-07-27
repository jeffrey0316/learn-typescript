interface UtilityObject {
  toLower(president: string): string
  //   unique(arr: string[]): string[]
  // Add more utility functions as needed.
  //   getUniqueLettersFromArray(arr: string[]): string[] // Adding the new method to the interface.
}

const utilityFunctions: UtilityObject = {
  toLower: (president) => president.toLowerCase(),
  //   unique: (arr) => [...new Set(arr)].sort(),
  // Implement other utility functions here.
  //   getUniqueLettersFromArray: (arr) => {
  //     const allLetters = arr.join('') // Combine all array elements into a single string.
  //     const uniqueLetters = utilityFunctions.unique(allLetters.split(''))
  //     return uniqueLetters.filter((letter) => letter !== ' ') // Remove spaces.
  //   },
}

export default utilityFunctions
