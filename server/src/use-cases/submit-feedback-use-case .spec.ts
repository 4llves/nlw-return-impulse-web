import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feeddback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Example',
      screenshot: 'data:image/png;base64,açlsdjkfdaolsçjdfdaçsdlfkjaçsaslçdkfj'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit  feeddback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Example',
      screenshot: 'data:image/png;base64,açlsdjkfdaolsçjdfdaçsdlfkjaçsaslçdkfj'
    })).rejects.toThrow()
  })

  it('should not be able to submit  feeddback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,açlsdjkfdaolsçjdfdaçsdlfkjaçsaslçdkfj'
    })).rejects.toThrow()
  })

  it('should not be able to submit  feeddback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'ta tudo bugado',
      screenshot: '123.jpg'
    })).rejects.toThrow()
  })
})