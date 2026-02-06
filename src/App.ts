/*

// "dev": "npx ts-node src/App.ts" -- line from package.json before edit

app.use(express.json());

app.get('/', (req: any, res: any) => {
    res.send('Hello World!');
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