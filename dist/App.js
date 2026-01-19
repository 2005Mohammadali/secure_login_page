"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/v1/register', (req, res) => {
    const { firstName, lastName, username, password, email } = req.body;
    res.send(`User ${firstName} ${lastName} registered successfully!`);
});
app.post('/v1/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`User ${username} logged in successfully!`);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("http://localhost:3000");
});
//# sourceMappingURL=App.js.map