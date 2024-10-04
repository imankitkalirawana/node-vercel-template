const express = require("express");
const app = express();
const connectDB = require('./db');
const Hotel = require('./models/Hotel');

app.get("/", async (req, res) => {
    // get all hotels
    await connectDB();
    const hotels = await Hotel.find();
    res.json(hotels);
});

app.get('/about', (req, res) => {
    res.send('About route 🎉 ')
})

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
