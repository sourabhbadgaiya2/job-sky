


const express = require('express');
const AdminModel = require('../../Controller/Razorpay/PaymentController');
const router = express.Router();


router.post("/verify", AdminModel.checkout);

router.post("/confirm-order", AdminModel.paymentVerification );

router.post('/resetpassword', AdminModel.resetPassword)

router.get("/reset-password/:id", AdminModel.forgotPassword)


module.exports = router;




