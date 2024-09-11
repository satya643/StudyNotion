// const Razorpay = require("razorpay");

// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });
require('dotenv').config(); // Ensure this is at the top of the file

const Razorpay = require("razorpay");

exports.instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,       // Should be set in your .env file
  key_secret: process.env.RAZORPAY_SECRET // Should be set in your .env file
});

// Verify if the environment variables are correctly loaded
if (!process.env.RAZORPAY_KEY || !process.env.RAZORPAY_SECRET) {
  throw new Error("Razorpay `key_id` and `key_secret` are mandatory.");
}
