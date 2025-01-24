import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const PORT = 8000;
const API_KEY = '3256d25f4951fc2338b7619447461b2f';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.json({ error: 'Please provide a city' });
    }
    
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        res.json(response.data);
    } catch (error) {
        res.json({ error: 'Unable to get weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
