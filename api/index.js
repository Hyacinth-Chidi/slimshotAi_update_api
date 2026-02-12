const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Allow all origins (the Flutter app will call this)
app.use(cors());

// Health check

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'SlimShotAI Update API' });
});
app.get('/api', (req, res) => {
  res.json({ status: 'ok', service: 'SlimShotAI Update API' });
});

// Update endpoint
app.get('/api/update', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '..', 'data', 'update.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    res.json(data);
  } catch (error) {
    console.error('Error reading update data:', error);
    res.status(500).json({ error: 'Failed to read update data' });
  }
});

// Local dev server (Vercel ignores this)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 SlimShotAI API running on http://localhost:${PORT}`);
  });
}

module.exports = app;
