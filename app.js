const app = require ('express');
const express = require('express');
const connectDB = require('./db');
const errorHandler = require('./middlewareerrorhandler');
const userRoutes =require('./routes/userRoutes');
const routeRoutes = require ('./routes/routesRoutes');
const { Mongoose } = require('mongoose');
const scheduleRoutes = require ('./routes/scheduleRoutes')


(require)
(Mongoose)

mongoose.connect(process.env.MONGO_URI,{
    userNewUrlParser: true,
    userUnifiedTopology: true,
})


 

// (app)
app.use('/api/user', userRoutes);
app.use('/api/route', routeRoutes);
app.use('/api/schedule', scheduleRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

