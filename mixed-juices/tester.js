const someOrder = [
  "Tropical Island",
  "Energizer",
  "Limetime",
  "All or Nothing",
  "Pure Strawberry Joy",
]

function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5
    case "Energizer":
    case "Green Garden":
      return 1.5
    case "Tropical Island":
      return 3
    case "All or Nothing":
      return 5
    default:
      return 2.5
  }
}

function remainingOrders(timeLeft, orders) {
  let i = 0
  while (i < orders.length && timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[i])
    i = i + 1
  }

  return orders.slice(i)
}

console.log(remainingOrders(10, someOrder))
