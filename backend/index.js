// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com' },
];

app.get('/api/data', (req, res) => {
  res.send(sampleData);
});

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Emit live data updates
  setInterval(() => {
    socket.emit('dataUpdate', sampleData);
  }, 10000); // every 10 seconds
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
