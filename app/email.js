"use strict"

const nodemailer = require("nodemailer");

const email = {
    "host": "maila.em-tech.co.kr",
    "port": "110",
    "secure": false,
    "auth": {
        "user": "ssungwk@em-tech.co.kr",
        "pass": "teic1851"
    }
};

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'ssungwk@em-tech.co.kr',
    to: 'ssungwk@em-tech.co.kr',
    subject: 'test email',
    text: 'test contents'
}

send(email_data);
