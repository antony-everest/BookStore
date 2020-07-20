const express = require('express');
const bodyParser = require('body-parser');
const dbService = require('./app/services/dbConnectionSevice.js')

// app creation
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// DB Config
dbService.initDBConnection();

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "it works"});
});

require('./app/routes/routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});