const express = require("express");
const cors = require("cors");
const Joke = require("./Input");

const app = express();
app.use(cors());
app.use(express.json());

// get all the inputs
app.get("/inputs", async function(req, res) {

});

// create one input


app.post("/inputs", async)

app.listen(3001, () => console.log("Server started on 3001"));
