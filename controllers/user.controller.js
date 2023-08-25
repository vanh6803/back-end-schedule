const userModel = require("../models/User.model");

exports.checkUserAlreadyExists = async (req, res, next) => {
  const email = req.query.email;
  console.log(email);
  try {
    const user = await userModel.user.findOne({ email: email });
    if (!user) {
      return res
        .status(200)
        .json({
          status: 200,
          message: "email doesn't exist yet",
          check: false,
        });
    }
    return res
      .status(200)
      .json({
        status: 200,
        message: "email already exit",
        check: true,
        data: user,
      });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

exports.updateUser = async (req, res, next) => {
  let id = req.params.id;
  try {
    const user = await userModel.user.findById({ _id: id });
    if (!user) {
      return res.status(401).json({ status: 401, message: "not found" });
    }
    const data = req.body;
    const dataUpdate = await userModel.user.findByIdAndUpdate(
      { _id: id },
      data
    );
    console.log(dataUpdate);
    return res
      .status(200)
      .json({ status: 200, message: "updated successfully", data: dataUpdate });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

exports.getProfile = async (req, res, next) => {
  let id = req.params.id;
  try {
    const user = await userModel.user.findById({ _id: id });
    if (!user) {
      return res.status(401).json({ status: 401, message: "not found" });
    } else {
      return res
        .status(200)
        .json({ status: 200, message: "get profile success", data: user });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: 500, message: error.message });
  }
};
