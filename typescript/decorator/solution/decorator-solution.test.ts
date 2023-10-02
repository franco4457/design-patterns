import { EmailDecorator, FacebookDecorator, Notifier, SMSDecorator, SlackDecorator } from '.'

describe('Notifier classes', () => {
  it('should send a message by SMS', () => {
    let notifier = new Notifier('Hi!')
    notifier = new SMSDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by SMS')
  })

  it('should send a message by Facebook', () => {
    let notifier = new Notifier('Hi!')
    notifier = new FacebookDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by Facebook')
  })

  it('should send a message by Slack', () => {
    let notifier = new Notifier('Hi!')
    notifier = new SlackDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by Slack')
  })

  it('should send a message by Email', () => {
    let notifier = new Notifier('Hi!')
    notifier = new EmailDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by Email')
  })

  it('should send a message by SMS and Slack', () => {
    let notifier = new Notifier('Hi!')
    notifier = new SMSDecorator(notifier)
    notifier = new SlackDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by SMS - Slack')
  })

  it('should send a message by Facebook and Slack', () => {
    let notifier = new Notifier('Hi!')
    notifier = new FacebookDecorator(notifier)
    notifier = new SlackDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by Facebook - Slack')
  })

  it('should send a message by Facebook and Email', () => {
    let notifier = new Notifier('Hi!')
    notifier = new FacebookDecorator(notifier)
    notifier = new EmailDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by Facebook - Email')
  })

  it('should send a message by Slack and Email', () => {
    let notifier = new Notifier('Hi!')
    notifier = new SlackDecorator(notifier)
    notifier = new EmailDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by Slack - Email')
  })
  it('should send a message by SMS and Facebook', () => {
    let notifier = new Notifier('Hi!')
    notifier = new SMSDecorator(notifier)
    notifier = new FacebookDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by SMS - Facebook')
  })

  it('should send a message by SMS and Email', () => {
    let notifier = new Notifier('Hi!')
    notifier = new SMSDecorator(notifier)
    notifier = new EmailDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by SMS - Email')
  })

  it('should send a message by SMS, Facebook and Slack', () => {
    let notifier = new Notifier('Hi!')
    notifier = new SMSDecorator(notifier)
    notifier = new FacebookDecorator(notifier)
    notifier = new SlackDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by SMS - Facebook - Slack')
  })
  it('should send a message by all notifiers', () => {
    let notifier = new Notifier('Hi!')
    notifier = new SMSDecorator(notifier)
    notifier = new FacebookDecorator(notifier)
    notifier = new SlackDecorator(notifier)
    notifier = new EmailDecorator(notifier)
    expect(notifier.send()).toBe('Send: Hi!. by SMS - Facebook - Slack - Email')
  })
})
