import type { INotifier } from 'decorator'

export class Notifier implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}.`
  }
}
class BaseDecorator implements INotifier {
  message: string
  constructor(private readonly notifier: Notifier) {
    this.message = notifier.message
  }

  send() {
    return this.notifier.send()
  }
}

export class SMSDecorator extends BaseDecorator {
  send() {
    const message = super.send()
    if (message.endsWith('.')) {
      return `${message} by SMS`
    }
    return `${super.send()} - SMS`
  }
}
export class FacebookDecorator extends BaseDecorator {
  send() {
    const message = super.send()
    if (message.endsWith('.')) {
      return `${message} by Facebook`
    }
    return `${super.send()} - Facebook`
  }
}
export class SlackDecorator extends BaseDecorator {
  send() {
    const message = super.send()
    if (message.endsWith('.')) {
      return `${message} by Slack`
    }
    return `${super.send()} - Slack`
  }
}
export class EmailDecorator extends BaseDecorator {
  send() {
    const message = super.send()
    if (message.endsWith('.')) {
      return `${message} by Email`
    }
    return `${super.send()} - Email`
  }
}
