import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

const app = express();
app.use(cors());
app.use(express.json());

// Đọc file JSON credentials từ biến môi trường GOOGLE_APPLICATION_CREDENTIALS
const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!keyPath) {
  throw new Error('Missing GOOGLE_APPLICATION_CREDENTIALS environment variable');
}

const absKeyPath = path.resolve(keyPath);
const rawCredentials = fs.readFileSync(absKeyPath, 'utf8');
const credentials = JSON.parse(rawCredentials);

// Xử lý private_key vì thường có dấu \n bị escape trong JSON string
credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials,
});

const PROPERTY_ID = '307330796';

app.get('/api/analytics', async (req, res) => {
  try {
    // Sử dụng runRealtimeReport để lấy số người dùng hoạt động trong 30 phút qua
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${PROPERTY_ID}`,
      metrics: [{ name: 'activeUsers' }],
    });

    // Lấy giá trị activeUsers từ response
    const activeUsers = response.rows?.[0]?.metricValues?.[0]?.value || '0';

    res.json({ activeUsers });
  } catch (error) {
    console.error('Error running GA realtime report:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});