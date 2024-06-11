import express from 'express';
import fetch from 'node-fetch'; // Importez fetch une seule fois
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
const axios = require('axios');

app.get('/api/production', async (req, res) => {
  try {
    const response = await axios.get('https://monitoringapi.solaredge.com/site/2508316/energy', {
      params: {
        timeUnit: 'QUARTER_OF_AN_HOUR',
        startDate: '2023-06-11',
        endDate: '2023-06-11',
        api_key: '8PZR50LGWNSRDGWM5XDWJ4DOSUECST1V'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données de production:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données de production' });
  }
});


app.get('/api/consumption', async (req, res) => {
  try {
    const apiKey = '8PZR50LGWNSRDGWM5XDWJ4DOSUECST1V';
    const siteId = '2508316';
    const response = await fetch(`https://monitoringapi.solaredge.com/site/${siteId}/power?api_key=${apiKey}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données de consommation:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données de consommation' });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
