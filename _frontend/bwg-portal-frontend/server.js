const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose")
const app = express();
const PORT = 3001

mongoose.connect('mongodb://localhost/bwgtodos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const userSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
  });

const User = mongoose.model('User', userSchema);

app.use(cors())
app.use(express.json())

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();
    if (user) {
        res.status(500);
        res.json({
            message: "user already exists",
        });
        return;
    }
    await User.create({ username, password });
    res.json({
        massage:"success",
        
    });
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    app.listen(PORT, () => {
        console.log("Server is running on Port: " + PORT);
    })
});