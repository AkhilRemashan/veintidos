const express = require('express');

const app = express();


// Middlewares
app.use('/posts', () => {
    // console.log("This is a middleware running");
});


// Route
app.get('/', (req, res) => {

    res.send("we are home");

});

app.get('/posts', (req,res) => {

    res.send("We are posts");

});



// Listening server
app.listen(8989);