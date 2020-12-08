const algoTest = (testFunction, params, expects) => {
  params.forEach((param, idx) => {
    const result = testFunction(...param)
    const expect = expects[idx]

    let isMatch = result === expect
    if (Array.isArray(expect)) {
      isMatch = arrayMatch(result, expect)
    }

    const resultMsg = `
    result -> ${result} 
    expect -> ${expect}
    \t\t\t${isMatch ? '' : 'plz check this param'}
    ----------------
    `
    console.log('\n', param)
    console.log(resultMsg)
  })
}

const arrayMatch = (arr1, arr2) => {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) return false

  // Check if all items exist and are in the same order
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  // Otherwise, return true
  return true
}

module.exports = { algoTest }
