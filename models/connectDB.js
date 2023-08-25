const mongoose = require('mongoose')

mongoose
  .connect("mongodb://127.0.0.1:27017/StudentSchedule")
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("connected failure: "+err.message));

module.exports = {
  mongoose,
};