const express = require("express")
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./_db')
const {typeDefs} = require('./schema')



const resolvers = {
    Query : {
        games: () => db.games,
        reviews: () => db.reviews,
        review: (_, args) => db.reviews.find(review => review.id === args.id)
    }
}

const startServer = async () => {
    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    app.use(bodyParser.json())
    app.use(cors())

    await server.start()

    app.use("/graphql", expressMiddleware(server))

    app.listen(8000, () => console.log("Server started at PORT 8000"))
}

startServer()