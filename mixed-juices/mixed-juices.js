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

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // timeElapsed: time remaining after preparing each drink
  //
}
