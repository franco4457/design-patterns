import {
  SMSEmailNotification,
  FacebookNotification,
  SlackNotification,
  EmailNotification,
  SMSSlackNotification,
  FacebookSlackNotification,
  FacebookEmailNotification,
  SlackEmailNotification,
  SMSFacebookNotification,
  SMSNotification
} from '.'

describe('Notifier classes', () => {
  it('should send a message by SMS', () => {
    const notifier = new SMSNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by SMS')
  })

  it('should send a message by Facebook', () => {
    const notifier = new FacebookNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by Facebook')
  })

  it('should send a message by Slack', () => {
    const notifier = new SlackNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by Slack')
  })

  it('should send a message by Email', () => {
    const notifier = new EmailNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by Email')
  })

  it('should send a message by SMS and Slack', () => {
    const notifier = new SMSSlackNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by SMS - Slack')
  })

  it('should send a message by Facebook and Slack', () => {
    const notifier = new FacebookSlackNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by Facebook - Slack')
  })

  it('should send a message by Facebook and Email', () => {
    const notifier = new FacebookEmailNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by Facebook - Email')
  })

  it('should send a message by Slack and Email', () => {
    const notifier = new SlackEmailNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by Slack - Email')
  })
  it('should send a message by SMS and Facebook', () => {
    const notifier = new SMSFacebookNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by SMS - Facebook')
  })

  it('should send a message by SMS and Email', () => {
    const notifier = new SMSEmailNotification('Hi!')
    expect(notifier.send()).toBe('Send: Hi!. by SMS - Email')
  })
})
