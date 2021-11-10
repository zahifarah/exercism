const someArr = [1, 77, 1, 77, 1, 77]

function fixBirdCountLog(birdsPerDay) {
  const fixedArr = []
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      fixedArr.push(birdsPerDay[i] + 1)
    } else {
      fixedArr.push(birdsPerDay[i])
    }
  }

  return fixedArr
}

console.log(someArr)
console.log(fixBirdCountLog(someArr))
