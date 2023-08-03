import {Command} from '@oclif/core'

export default class ESM2 extends Command {
  async run(): Promise<void> {
    this.log(`hello I am an ESM plugin from ${this.config.root}!`)
  }
}
