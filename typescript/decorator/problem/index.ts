import type { INotifier } from 'decorator'

export class SMSNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by SMS`
  }
}
export class FacebookNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by Facebook`
  }
}
export class SlackNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by Slack`
  }
}
export class EmailNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by Email`
  }
}
export class SMSFacebookNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by SMS - Facebook`
  }
}
export class SMSSlackNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by SMS - Slack`
  }
}
export class SMSEmailNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by SMS - Email`
  }
}
export class FacebookSlackNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by Facebook - Slack`
  }
}

export class FacebookEmailNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by Facebook - Email`
  }
}
export class SlackEmailNotification implements INotifier {
  constructor(public message: string) {}
  send() {
    return `Send: ${this.message}. by Slack - Email`
  }
}
