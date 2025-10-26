require('dotenv').config(); // Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const verifyToken = require('./authMiddleware'); // adjust path if needed

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using .env variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  location: String,
  eventType: String,
  requests: String,
});

const Booking = mongoose.model('Bookings', bookingSchema);

// POST route to save booking
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

// GET route to fetch all bookings
app.get('/api/bookings', verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});


app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Match credentials with .env
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Create JWT token
    const token = jwt.sign(
      { email, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '5m' }
    );

    res.json({ accessToken: token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Use PORT from .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));