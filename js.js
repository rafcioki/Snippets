// Simplest assert possible for quokka prototyping

const should = (expected, actual) => {
  if (expected == actual) {
    return 'OK'
  } else {
    return `Expected ${expected} but got ${actual}`
  }
}