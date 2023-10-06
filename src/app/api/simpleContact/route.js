import { NextResponse } from "next/server";
export async function POST(request) {
  let payload = await request.json();
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    auth: { user: "contact@growthecho.pro", pass: "Growthecho@123" },
    secure: true,
  });
  var mailOptions = {
    from: "contact@growthecho.pro",
    to: "contact@growthecho.pro",
    subject: "Contact Form Submitted via GrowthEco",
    html: `<h3>Name:</h3><p>${payload.name}</p><h3>Email:</h3><p>${payload.email}</p><h3>Message:</h3><p>${payload.message}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return NextResponse.json({ message: "Got the data" });
}
// export default function sendForm(req, res) {
//   if (req.method == "POST") console.log("!!!!!", req.body); // Your form data
// Any logic with your data here
//   var nodemailer = require("nodemailer");
//   var transporter = nodemailer.createTransport({
//     host: "smtpout.secureserver.net",
//     port: 465,
//     auth: { user: "info@staffhunter.io", pass: "reactive_007" },
//     secure: true,
//   });
//   var mailOptions = {
//     from: "info@staffhunter.io",
//     to: "info@staffhunter.io",
//     subject: "Get Started as Company",
//     html: `<h3>Name:</h3><p>${req.body.f_name}</p><h3>Email:</h3><p>${req.body.email}</p><h3>Phone:</h3><p>${req.body.phone}</p>`,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//       res.status(200).json({ data: "success" });
//     }
//   });
//}

// export default apiRoute;

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };
// const handler = async (req, res) => {
//   console.log("this is req", req.body);
// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
// 	host: 'smtp.hostinger.com',
// 	port: 465,
// 	auth: { user: 'info@eminentconsultingandservices.com', pass: 'Eminent@654321' },
// 	secure: true
// });
// var mailOptions = {
// 	from: 'info@eminentconsultingandservices.com',
// 	to: 'info@eminentconsultingandservices.com',
// 	subject: 'Contact Form Submitted from website',
// 	html: `<h3>Name:</h3><p>${req.body.name}</p><h3>Email:</h3><p>${req.body.email}</p><h3>Phone:</h3><p>${req.body
// 		.phone}</p><h3>Service:</h3><p>${req.body.service}</p><h3>Message:</h3><p>${req.body.message}</p>`
// };

// transporter.sendMail(mailOptions, function(error, info) {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log('Email sent: ' + info.response);
// 		res.json({ status: 'OK' });
// 	}
// });
// };
// export default handler;
