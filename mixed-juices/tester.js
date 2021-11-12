const someOrder = [
  "Tropical Island",
  "Energizer",
  "Limetime",
  "All or Nothing",
  "Pure Strawberry Joy",
]

/*
Current goal:
Iterate over every element of orders, and for every iteration subtract from timeLeft the relevant number (depending on the case)
Do the above as long as timeLeft > 0
*/

// array.slice(i + 1)

function remainingOrders(timeLeft, orders) {
  let timeElapsed = 0

  let i = 0
  while (i < orders.length && timeLeft > 0) {
    switch (orders[i]) {
      case "Pure Strawberry Joy":
        timeElapsed = 0.5
        break
      case "Energizer":
      case "Green Garden":
        timeElapsed = 1.5
        break
      case "Tropical Island":
        timeElapsed = 3
        break
      case "All or Nothing":
        timeElapsed = 5
        break
      default:
        timeElapsed = 2.5
        break
    }
    timeLeft -= timeElapsed
    i = i + 1
  }
  return orders.slice(i)
}

console.log(remainingOrders(7, someOrder))
