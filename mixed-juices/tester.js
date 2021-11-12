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

  while (timeLeft > 0) {
    if (i < orders.length) {
      console.log(timeLeft)
      console.log(timeElapsed)
      console.log(i)
      console.log(orders[i])
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
    console.log(i)
    console.log(orders[i])
  }

  return i
}

console.log(remainingOrders(13, someOrder))
