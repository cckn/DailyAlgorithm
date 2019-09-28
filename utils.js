const algoTest = (testFunction, params, expects) => {
  params.forEach((param, idx) => {
    const result = testFunction(...param)
    const resultMsg = `
    result -> ${result} 
    expect -> ${expects[idx]}
    \t\t\t${result === expects[idx] ? '' : 'plz check this param'}
    ----------------
    `
    console.log('\n', param)
    console.log(resultMsg)
  })
}

module.exports = { algoTest }
