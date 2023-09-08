const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const userId = 'Gokul_13082003';
    const email = 'gu5260@srmist.edu.in';
    const rollNumber = 'RA2011004010137';
    const status = true;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.reduce((a, b) => a > b ? a : b);

    res.json({
        is_success: status,
        user_id: userId,
        email,
        roll_number: rollNumber,
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
