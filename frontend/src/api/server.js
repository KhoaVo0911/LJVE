import express from 'express';
import cors from 'cors';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

const app = express();
app.use(cors());
app.use(express.json());

const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials,
});

const PROPERTY_ID = 'YOUR-GA4-PROPERTY-ID';  // Thay bằng Property ID đúng của bạn

app.get('/analytics', async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: '2023-01-01', endDate: '2023-01-31' }],
      metrics: [{ name: 'activeUsers' }],
      dimensions: [{ name: 'city' }],
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
