const express = require("express");
const AdminModel = require("../../Module/Admin/AdminModule");
const router = express.Router();

const {
  register,
  login,
  resetPassword,
} = require("../../Controller/Admin/RegitrationController");

// Customer Registration
router.post("/register", register);

router.get("/alluser", async (req, res) => {
  try {
    const alluser = await AdminModel.find();
    res.status(200).json(alluser);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Customer Login
router.post("/login", login);

router.post("/resetpassword", resetPassword);

module.exports = router;
