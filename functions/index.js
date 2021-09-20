const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
const config = functions.config();
const cors = require("cors")({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});
const mailOptions = {
  from: "Arc Development",
  to: "smancpd@gmail.com",
  subject: "Testing nodemailer",
  text: "Test successful",
};

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.set("Access-Control-Allow-Origin", "*");

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
