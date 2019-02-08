const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}));

app.listen(4002, () => {
    console.log('Listening...');
});