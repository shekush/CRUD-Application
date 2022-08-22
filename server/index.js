const express = require('express');
const mongoose = require(mongoose);
const app = express();


app.use(express.json);

mongoose.connect("mongodb+srv://shejal:shejal12345@crud.legj357.mongodb.net/?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
});



app.listen(3001, () => {
    console.log("Server running on port 3001...");
})