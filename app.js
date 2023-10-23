const express = require('express');
const connectDB = require('./db');
const errorHandler = require('./middleware/middlewareerrorhandler');

const app = express();


connectDB();


app.use(express.json());


app.use('/api/user', require('./routes/user'));
app.use('/api/route', require('./routes/route'));
app.use('/api/schedule', require('./routes/schedule'));


app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

