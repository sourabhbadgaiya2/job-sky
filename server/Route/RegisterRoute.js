const express = require("express");
const AdminModel = require("../Controller/Auth/RegisterController");
const router = express.Router();

router.post("/register", AdminModel.register);

// router.post("/registerpotal", AdminModel.registerpostal);
// router.post("/loginportal", AdminModel.loginpostal)

router.post("/login", AdminModel.login);

router.post("/registeruser", AdminModel.registeruser);
router.post("/loginOrRegister", AdminModel.loginOrRegister);
router.get("/all", AdminModel.getAllUsers);
module.exports = router;
