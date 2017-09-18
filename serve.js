// npm install
// npm install --save express
const express = require('express')
// npm install --save graphql
// npm install --save express-graphql
const graphqlHTTP = require('express-graphql')
const app = express()

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000)
console.log('Listening...')

// node serve.js
/*
localhost:4000
query {
  author(id: 21559) {
    name,
    books {
      title,
      isbn
    }
  }
}
*/