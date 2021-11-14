function normalize(score) {
  return 2 * score + 10
}

const someParam = { score: 400, normalizeFunction: normalize }

function normalizeScore(params) {
  const { score, normalizeFunction } = params
  return normalizeFunction(score)
}

console.log(normalizeScore(someParam))
