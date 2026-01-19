const express = require('express');
const mongoose = require('mongoose');
const app = express();

const { UserModel } = require('./database');

mongoose.connect('mongodb://localhost:3000/myapp');

app.use(express.json());

app.get('/', (req: any, res: any) => {
    res.send('Hello World!');
});

app.post('/v1/register', async (req: any, res: any) => {
    const { firstName, lastName, username, password, email } = req.body;

    const user = new UserModel({
        firstName,
        lastName,
        username,
        password,
        email
    })
    await user.save();
    if (user) {
        res.send(`User ${firstName} ${lastName} registered successfully!`);
    }else{
        res.status(500).send('Error registering user');
    }
});

app.post('/v1/login', async (req: any, res: any) => {
    const {username, password} = req.body;

    const user = await UserModel.findOne({username, password});
    if(user){
        res.send(`User ${username} logged in successfully!`);
    }else{
        res.status(401).send('Invalid credentials');
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("http://localhost:3000");
});