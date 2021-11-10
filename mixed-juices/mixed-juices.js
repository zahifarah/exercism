/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
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

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
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

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error("Please implement the remainingOrders function")
}
