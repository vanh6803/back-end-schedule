const db = require("./connectDB");

const userSchema = new db.mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  photo: { type: String, required: false },
},{
  timestamps: true
});

let user = db.mongoose.model("Users", userSchema);

module.exports = {
  user,
};
