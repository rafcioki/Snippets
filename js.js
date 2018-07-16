// Simplest assert possible for quokka prototyping

const should = (actual, expected) => {
  if (actual && expected && actual.length === expected.length
    && actual.every && actual.every((v, i) => v === expected[i])) {
      return 'OK'
    }

  if (expected === actual) {
    return 'OK'
  } else {
    return `Expected ${expected} but got ${actual}`
  }
}

// Immutably reverse an array

const immutableReverse = (string) => {
  return splitString(string).reverse().join('')
}

