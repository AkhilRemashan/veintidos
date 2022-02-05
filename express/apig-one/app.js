const express = require('express');

const app = express();

// Route
app.get('/', (req, res) => {

    res.send("we are home");

});



// Listening server
app.listen(8989);