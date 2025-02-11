 // Import the Express.js library
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Initialize an array to store login details
let loginDetails = [];

// Define the root route to send a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string
app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details
app.post("/login/:name", (req, res) => {
    loginDetails.push({ "name": req.params.name, "login_time": new Date() });
    res.send(req.params.name + ", You are logged in!");
});

// Define a dynamic route to greet users by name
app.get("/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

let months = ["January","February", "March", "April", 
                "May", "June", "July", "August","September",
                "October", "November","December"];
app.get('/fetchMonth/:num',(req,res)=>{
    const chosenNum = parseInt(req.params.num);
    if(chosenNum>0 && chosenNum<=12){
        let chosenMonth = months[chosenNum-1];
        res.send("The month that was chosen is: "+chosenMonth);
    }else{
        res.send("Invalid input-not a valid number. Try again.");
    }
});

// Start the server and listen on port 3333
app.listen(3334, () => {
    console.log(`Listening at http://localhost:3333`);
});

