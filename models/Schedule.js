const mongoose = require('mongoose');
const scheduleSchema = new mongoose.Schema({
  departureTime: { type:String, required: true },
  arrivalTime: { type:String, required: true },
  dayOfWeek: { type: String, required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;
