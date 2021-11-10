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
// 68

function limesToCut(wedgesNeeded, limes) {
  let availableWedges = 0
  let neededLimes = 0

  for (let i = 0; i < limes.length; i++) {
    if (availableWedges < wedgesNeeded) {
      switch (limes[i]) {
        case "small":
          availableWedges += 6
          break
        case "medium":
          availableWedges += 8
          break
        case "large":
          availableWedges += 10
          break
      }
      neededLimes++
    }
  }

  return neededLimes
}

console.log(limesToCut(42, limesArr))
