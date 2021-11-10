import { start } from "repl"

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let sum = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum = sum + birdsPerDay[i]
  }
  return sum
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const startIdx = week * 7 - 7
  const endIdx = week * 7

  const weeklySlice = birdsPerDay.slice(startIdx, endIdx)

  // ### FOR LOOP SOLUTION
  // let weeklyBirds = 0
  // for (let i = 0; i < weeklySlice.length; i++) {
  //   weeklyBirds = weeklyBirds + weeklySlice[i]
  // }

  // ### REDUCE METHOD SOLUTION
  let weeklyBirds = weeklySlice.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  }, 0)

  return weeklyBirds
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) birdsPerDay[i]++

  return birdsPerDay
}
