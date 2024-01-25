const typeDefs = `
type Game {
    id: ID!
    title: String!
    platform: [String!]!
}
type Review {
    id: ID!
    rating: Int!
    content: String!
}
type Query {
    games: [Game]
    reviews: [Review]
    review(id: ID!) : Review
}
`

module.exports = {typeDefs}