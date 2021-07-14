import nodemailer from "nodemailer";
import dotenv from "dotenv";

export default async (req, res) => {
    dotenv.config();
    const { mail, email, messege, name, temat } = req.body;
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        host: "mail-serwer67562.lh.pl",
        port: 465,
        secure: true,
        auth: {
            user: "kontakt@ohhsite.com",
            pass: process.env.MAIL_PASS,
        },
    });

    try {
        const emailRes = await transporter.sendMail({
            from: "kontakt@ohhsite.com",
            to: "kontakt@ohhsite.com",
            subject: `From`,
            html: `<p>Imię: ${name}</p> <p>Email: ${email}</p><p>Temat: ${temat}</p><p>Wiadomość: ${messege}</p>`,
        });
        console.log("email sent");
    } catch (error) {
        console.log(error);
    }
    res.status(200).json(req.body);
};
