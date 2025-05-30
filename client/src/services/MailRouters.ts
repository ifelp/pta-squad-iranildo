import { Router }   from 'express';
import { sendEmail } from './index';

const mailRouters = Router();

mailRouters.post('/send', sendEmail);

export default MailRouters;