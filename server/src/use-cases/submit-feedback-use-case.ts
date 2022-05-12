import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {

  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) { }

  async execute(req: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = req;

    if (!type) {
      throw new Error('Type is required')
    }

    if (!comment) {
      throw new Error('Comment is required')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #1E1E1E">`,
        `<h1 style="font-size: 48px; font-weight: bold; color: #8257E5">🎊 CHEGOU UM NOVO FEEDBACK 🎊</h1>`,
        `<h2 style="font-size: 24px; font-weight: normal;">Tipo do Feedback: ${type}</h2>`,
        `<pstyle="font-size: 24px; font-weight: normal;">Comentário: ${comment}</p>`,
        screenshot ? `<img style="width: 720px;" src="${screenshot}" />` : ``,
        `</div>`,
      ].join('\n')
    })
  }
}