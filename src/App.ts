const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const { UserModel } = require('./database');
const config = require('/config/default.ts')
const dbConnect = require('./utils/dbConnect');

app.use(express.json());

app.get('/', (req: any, res: any) => {
    res.send('Hello World!');
});

app.post('/v1/account/register', async (req: any, res: any) => {
    const { firstName, lastName, username, password, email, mobileNo } = req.body;

    const user = new UserModel({
        firstName,
        lastName,
        username,
        password,
        email,
        mobileNo
    })
    await user.save();
    if (user) {
        res.send(`User ${firstName} ${lastName} registered successfully!`);
    }else{
        res.status(500).send('Error registering user');
    }
});

app.post('/v1/account/login', async (req: any, res: any) => {
    const {username, password} = req.body;
    const token = jwt.sign({username}, JWT_SECRET, {expiresIn: '1h'});

    const user = await UserModel.findOne({username, password});
    if(user){
        res.send(`User ${username} logged in successfully!`);
        console.log("Token:", token);  
    }else{
        res.status(401).send('Invalid credentials');
    }
}); 

app.get('/v1/profile', async (req: any, res: any) => {
    const token = req.headers['token'];

    try {
        const user = await jwt.verify(token, JWT_SECRET);
        const profile = await UserModel.findOne({username: user.username});
        res.send(`This is the profile of ${profile.username}`);
    } catch (error) {
        console.log(error);
        res.status(401).send('Invalid token');
    }
})

const port = config.port;
app.listen(port, async () => {
    console.log(`Server is running at http://localhost:${port}`);
    await dbConnect();
});