function twoHighest (arr) {
  const highestNumbers = []

  if (arr.length > 0) {
    highestNumbers.push(arr[0])
  }

  for (let i = 0; i < arr.length; i++) {
    const firstElement = arr[i]

    for (let i = 0; i < arr.length; i++) {
      const secondElement = arr[i]

      const highestNumbersHasRepeatedElement = highestNumbers.find(element => element === firstElement || element === secondElement)

      if (firstElement > secondElement && highestNumbers.length <= 1 && !highestNumbersHasRepeatedElement) {
        highestNumbers.push(firstElement)
      }
    }
  }

  return highestNumbers
}

console.log(twoHighest([]))
