const express = require('express');
const axios = require('axios');


const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.SYLLABUS_API_URL}`, {
            headers: {
                Authorization: `Bearer ${process.env.SYLLABUS_API_KEY}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        });

        const processedEvents = response.data.events.map(event => ({
            week: getWeekNumber(event.event_date),
            classType: event.class_type,
            id: event.id,
            date: event.event_date,
            event: event.event_name,
            description: event.event_description,
        }));

        res.json({ events: processedEvents });

    } catch (error) {
        console.error('Error fetching syllabus data:', error);
        res.status(500).json({ message: 'Error fetching data from Syllabus API' });
    }
});

function getWeekNumber(dateString) {
    const date = new Date(dateString);
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    return Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
}

module.exports = router;
