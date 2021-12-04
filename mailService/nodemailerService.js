import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import {google} from 'googleapis';

dotenv.config({path:'../config.env'})

const OAuth2 = google.auth.OAuth2
const EMAIL = 'panchalshubham826@gamil.com'
const REFRESH_TOKEN = '1//04IeFOP502O0aCgYIARAAGAQSNwF-L9IrLFLoWR3f5Hq2KOiAlO5FB3YrY_yKAMyL3TZUvQftm1aF2qCCvCqMnJSHO3ON33SphNE'
const CLIENT_SECRET = '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'
const CLIENT_ID = '633581715629-7drkrd5p20rsjmerp61ecbg5kbnvkrm2.apps.googleusercontent.com'

const createTransport = async () =>{
    const oauth2Client = new OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    )
    oauth2Client.setCredentials({
        refresh_token: REFRESH_TOKEN
})
const accessToken = await new Promise((resolve,reject)=>{
    oauth2Client.getAccessToken((err,token)=>{
        if(err){
            console.log('Failed to create access token:(')
        }
        resolve(token)
    })
})

const transporter = nodemailer.createTransport({
    pool:false,
    secure: false,
    service:'Gmail',
    auth:{
        type:'OAuth2',
        user:EMAIL,
        accessToken,
        clientId:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        refreshToken:REFRESH_TOKEN
    },tls:{
            rejectUnauthorized:false
    }
})
return transporter
};
const sendEmail = async (emailOptions) => {
    let emailTransporter = await createTransport();
    const result = await emailTransporter.sendMail(emailOptions)
    console.log(result)
}

export const sendConfirmationMail = (name, email, confirmationCode) => {
    console.log('I am inside sendConfirmationeEmail  '+ EMAIL + email)
    sendEmail({
        from:EMAIL,
                    to:email,
                    subject: "Please confirm your account",
                    html: `<h1>Email Confirmation</h1>
                    <h2>Hello ${name}</h2>
                    <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                    <a href=http://localhost:${process.env.PORT}/confirm/${confirmationCode}> Click here</a>
                    </div>`
                
        })
}