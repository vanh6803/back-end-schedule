const db = require("./connectDB");
const user = require('./User.model')

const scheduleSchema = new db.mongoose.Schema({
  idUser: { type: db.mongoose.Schema.ObjectId, ref: "Users" },
  subject: { type: String, required: true },
  class: { type: String, required: true },
  room: { type: String, required: true },
  schoolShift: { type: String, required: true },
  auditorium: { type: String, required: true },
  teacher: { type: String, required: true },
  learnDay: { type: String, required: true}
});

let schedule = db.mongoose.model("Schedules", scheduleSchema);

module.exports = {
  schedule,
};
