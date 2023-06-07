const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 2000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// const users = [{
    
// }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = user.find((user) => user.username === username && user.password === password);
    if (user) {
        res.status(200).json({ msg: "Login Successfull" });
    } else {
        res.status(400).json({ error: "Invalid username or password" });
    }
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = user.find((u) => u.username === username && u.password === password);
    if (existingUser) {
        res.status(201).json({ msg: "User already Exist" });
    } else {
        const newUser = {
            username,
            password
        };
        user.push(newUser);
        res.status(201).json({ msg: "User register Successfully" });
    }
});


app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})