const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Use bcrypt for password hashing

const app = express();
const port = 3000;
const SECRET_KEY = 'your-secret-key'; // Change this to a secure key

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'medconnect_db',
    password: 'password',
    port: 5432,
});

app.use(cors());
app.use(express.json());

// Declare activeTokens at the top level
let activeTokens = {}; // Store active tokens and their last activity timestamps

app.post('/login', async (req, res) => {
    const { user_id, password } = req.body; // Removed user_type from here

    try {
        // Check if user exists
        const userQuery = 'SELECT * FROM "userTbl" WHERE user_id = $1';
        const userResult = await pool.query(userQuery, [user_id]);

        if (userResult.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = userResult.rows[0];

        // Compare the password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ user_id: user.user_id, user_type: user.user_type }, SECRET_KEY, {
            expiresIn: '5m', // Token expires after 5 minutes
        });

        // Store the token and the current timestamp
        activeTokens[token] = Date.now();

        // Send the token and user_type back to the client
        res.json({ token, user_type: user.user_type }); // Ensure user_type is included
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Middleware to authenticate the token and check for inactivity
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

    if (!token || !activeTokens[token]) {
        return res.sendStatus(401); // Unauthorized
    }

    // Check if the token is still valid based on inactivity
    const lastActivity = activeTokens[token];
    const currentTime = Date.now();
    const inactivityLimit = 5 * 60 * 1000; // 5 minutes in milliseconds

    if (currentTime - lastActivity > inactivityLimit) {
        delete activeTokens[token]; // Remove the token if it has expired
        return res.sendStatus(403); // Forbidden
    }

    // Update the last activity timestamp
    activeTokens[token] = currentTime;

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    });
};

// Example of a protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// Logout route to invalidate the token
app.post('/logout', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token
    if (token) {
        delete activeTokens[token]; // Remove the token from active tokens
    }
    res.sendStatus(204); // No Content
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
