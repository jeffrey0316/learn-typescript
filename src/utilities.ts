interface UtilityObject {
  toLower(president: string): string
  //   unique(arr: string[]): string[]
  // Add more utility functions as needed.
}

const utilityFunctions: UtilityObject = {
  toLower: (president) => president.toLowerCase(),
  //   unique: (arr) => [...new Set(arr)].sort(),
  // Implement other utility functions here.
}

export default utilityFunctions
