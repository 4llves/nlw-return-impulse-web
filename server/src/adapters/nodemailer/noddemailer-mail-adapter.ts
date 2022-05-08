import nodemailer from "nodemailer";
import { MailAdapter, SenddMailAdapter } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6ba4d66aed1417",
    pass: "c76eebda0d7861"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SenddMailAdapter) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Jhonata Alves <jhonatab4@gmail.com>',
      subject: subject,
      html: body,
    })
  }
}