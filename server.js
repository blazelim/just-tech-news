const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`now listening on port ${PORT}`));
});