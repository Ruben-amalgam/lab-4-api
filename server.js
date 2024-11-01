const express = require('express');
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3001;

const syllabusRouter = require('./routes/syllabus')

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json());


app.get('/api', (req, res) => {
    res.send('Welcome to the API base route!');
});

app.use('/api/syllabus', syllabusRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;