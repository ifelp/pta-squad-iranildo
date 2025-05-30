import { mailHandler } from './mailHandler';
import {Request, Response } from 'express';

export async function sendEmail(req: Request, res: Response) {
    try { 
            const { userName, userEmail, subjectText } = req.body;

            const emailConfig = {
                userName,
                userEmail,
                subjectText,
                html: `<h1>Hello ${userName}</h1>`

                const mailResponse = await mailHandler(emailConfig);

                if (mailResponse) {
                    return res.status(200).json({ message: 'Email sent successfully' });
                } else {
                    return res.status(500).json({ message: 'Failed to send email' });
                }
            }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while sending the email', error: error.message });
    }
}