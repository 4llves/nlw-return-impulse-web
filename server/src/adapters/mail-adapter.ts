export interface SenddMailAdapter {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: (data: SenddMailAdapter) => Promise<void>;
}