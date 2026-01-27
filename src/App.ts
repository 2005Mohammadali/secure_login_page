/*
app.use(express.json());

app.get('/', (req: any, res: any) => {
    res.send('Hello World!');
});

app.post('/v1/account/register', async (req: any, res: any) => {
    const { firstName, lastName, username, password, email, mobileNo } = req.body;

    const user = new UserModel.create({
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
*/


import 'dotenv/config';

import * as express from "express";
import routes from "./routes/routes";
import * as config from "config";
import connect from "./utils/dbConnect";

const app = express();

app.use((req, res, next) => {
    console.log(`🔔 INCOMING REQUEST: ${req.method} ${req.url}`);
    next();
});

const PORT = process.env.PORT;

app.use(express.json());

routes(app);

app.listen(PORT, async () => {
    console.log(`Server running on Port: ${PORT}`);
    await connect();
})