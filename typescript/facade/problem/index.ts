export class Computer {
  private processor: boolean = false
  private gpu: boolean = false
  private memory: boolean = false
  private os: boolean = false
  private apps: boolean = false
  powerOn() {
    if (this.processor) throw new Error('Processor is already on')
    this.processor = true
  }

  powerOff() {
    if (!this.processor) throw new Error('Processor is already off')
    if (this.gpu) throw new Error('GPU is on')
    this.processor = false
  }

  post() {
    if (!this.processor) throw new Error('Processor is not on')

    this.gpu = true
  }

  showBIOS() {
    if (!this.gpu) throw new Error('GPU is not on')

    this.memory = true
  }

  showWelcome() {
    if (!this.memory) throw new Error('Memory is not on')

    this.os = true
  }

  showDesktop() {
    if (!this.os) throw new Error('OS is not on')
    this.apps = true
  }

  closeApps() {
    if (!this.apps) throw new Error('Apps are not on')
    this.apps = false
  }

  showLoadingScreen() {
    if (this.apps) throw new Error('Apps are on')
    this.os = false
  }

  saveMemory() {
    if (this.os) throw new Error('OS is not on')
    this.memory = false
  }

  shotDown() {
    if (this.memory) throw new Error('Memory is not on')

    this.gpu = false
  }

  getStatus() {
    return {
      processor: this.processor,
      gpu: this.gpu,
      memory: this.memory,
      os: this.os,
      apps: this.apps
    }
  }
}
