const someOrder = [
  "Tropical Island",
  "Energizer",
  "Limetime",
  "All or Nothing",
  "Pure Strawberry Joy",
]

function remainingOrders(timeLeft, orders) {
  let i = 0
  let timeElapsed = 0

  while (i < orders.length) {
    if (timeLeft > 0) {
      console.log(timeLeft) // 13, 10, 8.5, 6, 1
      console.log(timeElapsed) // 0, 3, 1.5, 2.5, 5 <-- should start with a value of 3, not 0
      console.log(i) // 0, 1, 2, 3, 4 <-- makes sense
      console.log(orders[i]) // iterates over all elements in orders array
      switch (orders[i]) {
        case "Pure Strawberry Joy":
          timeElapsed = 0.5
          timeLeft -= timeElapsed
          break
        case "Energizer":
        case "Green Garden":
          timeElapsed = 1.5
          timeLeft -= timeElapsed
          break
        case "Tropical Island":
          timeElapsed = 3
          timeLeft -= timeElapsed
          break
        case "All or Nothing":
          timeElapsed = 5
          timeLeft -= timeElapsed
          break
        default:
          timeElapsed = 2.5
          timeLeft -= timeElapsed
          break
      }
      i++
    } else {
      return orders.length
    }
    console.log(timeLeft)
    console.log(timeElapsed)
    console.log(i) // 1, 2, 3, 4, 5 <-- no idea why this is returning 5? Which is greater than orders.length?
    console.log(orders[i])
  }

  return i
}

console.log(remainingOrders(13, someOrder))
