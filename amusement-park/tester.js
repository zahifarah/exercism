const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
}

function gtcVersion(visitor) {
  if (visitor.gtc) {
    return visitor.gtc.version
  }
}

console.log(gtcVersion(visitorNew))
