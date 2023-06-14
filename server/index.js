const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const port = 3001;


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'There is an erro on the server.' });
  });

app.use(express.json());

app.use(cors());

app.use('/users', userRoutes);




app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
  });
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
