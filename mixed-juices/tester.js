const limesArr = [
  "small",
  "large",
  "large",
  "medium",
  "small",
  "large",
  "large",
  "medium",
]
// total wedges: 68
// total limes (length): 8

const zahiArr = [
  "large",
  "medium",
  "medium",
  "large",
  "small",
  "small",
  "large",
  "small",
  "large",
]
// total wedges: 74
// total limes (length): 9

function limesToCut(wedgesNeeded, limes) {
  let wedgesAvailable = 0
  let neededLimes = 0
  let i = 0

  while (wedgesAvailable < wedgesNeeded) {
    if (i < limes.length) {
      switch (limes[i]) {
        case "small":
          wedgesAvailable += 6
          break
        case "medium":
          wedgesAvailable += 8
          break
        case "large":
          wedgesAvailable += 10
          break
      }
      neededLimes++
      i++
    } else {
      return limes.length
    }
  }

  return neededLimes
}

console.log(limesToCut(30, limesArr))
console.log(limesToCut(42, limesArr))
console.log(limesToCut(100, limesArr))
console.log(limesToCut(30, zahiArr))
console.log(limesToCut(30, zahiArr))
