const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); // Activer les CORS pour toutes les routes

const siteId = '2508316';
const apiKey = '8PZR50LGWNSRDGWM5XDWJ4DOSUECST1V';

app.get('/api/production', async (req, res) => {
  try {
    const response = await axios.get(`https://monitoringapi.solaredge.com/site/${siteId}/energy`, {
      params: {
        timeUnit: 'QUARTER_OF_AN_HOUR',
        startDate: '2024-06-11',
        endDate: '2024-06-11',
        api_key: apiKey,
      },
    });
    res.json(response.data.energy.values);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.get('/api/consumption', async (req, res) => {
  try {
    const response = await axios.get(`https://monitoringapi.solaredge.com/site/${siteId}/consumption`, {
      params: {
        timeUnit: 'QUARTER_OF_AN_HOUR',
        startDate: '2024-06-11',
        endDate: '2024-06-11',
        api_key: apiKey,
      },
    });
    res.json(response.data.consumption.values);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.get('/api/power-details', async (req, res) => {
  try {
    const startTime = '2024-06-11%2000:00:00';
    const endTime = '2024-06-11%2023:59:59';

    console.log("Fetching power details...");

    const response = await axios.get(`https://monitoringapi.solaredge.com/site/${siteId}/powerDetails`, {
      params: {
        meters: 'CONSUMPTION',
        startTime,
        endTime,
        api_key: apiKey,
      },
    });

    console.log("Power details fetched successfully:", response.data);

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching power details:", error);
    res.status(500).send(error.toString());
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
