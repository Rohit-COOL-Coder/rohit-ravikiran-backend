const routes=require('express').Router()
const RandomProduct=require("../models/RandomProduct")
var nodemailer = require('nodemailer');

routes.post('/add', async(req,res)=>{
    const {emailId,emailBody,description} = req.body
    const randomProduct= new RandomProduct(req.body)
    //  ----------------------NodeMailer--------------------
    // 1)
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
           ciphers:'SSLv3'
        },  
        auth: {
                user: 'rohitsah892@outlook.com',
                pass: process.env.PASS,
             }
        });

    // 2)
    const mailData = {
          from: 'rohitsah892@outlook.com',  // sender address
          to: emailId,   // list of receivers
          subject: description,
          text: emailBody,
        };
    //3)
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
     });


    try{
        let data=await randomProduct.save()
        res.status(200).json(data)
    }catch(err){
    res.status(500).json(err)
    }

})

routes.get('/find/:id',async(req,res)=>{
   try{
    const data= await RandomProduct.findById(req.params.id)
   res.status(200).json(data)
   }catch(err){
       res.status(500).json(err)
   }
})

module.exports=routes