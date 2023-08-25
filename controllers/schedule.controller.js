const scheduleModel = require("../models/Schedule.model");
const userModel = require("../models/User.model");

exports.getSchedule = async (req, res, next) => {
  const { uid } = req.query;

  console.log(uid);
  try {
    const data = await scheduleModel.schedule
      .find({
        idUser: uid,
      })
      .populate("idUser");
    if (data) {
      return res.status(200).json({
        status: 200,
        message: "get data successfully",
        data: data,
      });
    }
    
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: 500, message: error.message });
  }
};
