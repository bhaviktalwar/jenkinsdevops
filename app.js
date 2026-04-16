const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// Health check (Monitoring)
app.get('/health', (req, res) => {
    res.status(200).send("OK");
});

// Get users
app.get('/users', (req, res) => {
    res.json(users);
});

// Add user
app.post('/users', (req, res) => {
    users.push(req.body);
    res.status(201).send("User added");
});

// Delete user
app.delete('/users/:id', (req, res) => {
    users.splice(req.params.id, 1);
    res.send("User deleted");
});

// Login (simple auth)
app.post('/login', (req, res) => {
    const { username } = req.body;
    if (username) {
        res.send({ token: "dummy-token" });
    } else {
        res.status(400).send("Invalid login");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});