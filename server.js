const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const hostelRoutes = require('./routes/hostel');
require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Sai');
});

app.use('/api/hostel', hostelRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Failed to connect MongoDB:', err)
});
