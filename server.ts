import express from 'express';
import { createServer as createViteServer } from 'vite';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for inquiries (backed by file)
const DATA_FILE = path.join(__dirname, 'inquiries.json');
let inquiries: any[] = [];

// Load data on startup
if (fs.existsSync(DATA_FILE)) {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    inquiries = JSON.parse(data);
  } catch (err) {
    console.error('Error reading data file:', err);
  }
}

// Save data helper
const saveData = () => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2));
  } catch (err) {
    console.error('Error writing data file:', err);
  }
};

// Simple admin authentication (for demo purposes)
const ADMIN_PASSWORD = "admin"; 

// API Routes
app.post('/api/inquiries', (req, res) => {
  const inquiry = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString(),
    status: 'new'
  };
  inquiries.unshift(inquiry);
  saveData();
  console.log('New inquiry received:', inquiry);
  res.status(201).json({ success: true, message: 'Inquiry received' });
});

app.get('/api/inquiries', (req, res) => {
  // In a real app, you'd use a proper auth middleware
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  res.json({ success: true, inquiries });
});

app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true, token: ADMIN_PASSWORD });
  } else {
    res.status(401).json({ success: false, message: 'Invalid password' });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
