import {Args, Command, Flags, Interfaces} from '@oclif/core'

type Result = {
  args: Interfaces.InferredArgs<typeof ESM2.args>
  flags: Interfaces.InferredFlags<typeof ESM2.flags>
}

export default class ESM2 extends Command {
  static flags = {
    optionalString: Flags.string(),
    defaultString: Flags.string({
      default: 'simple string default',
    }),
    defaultFnString: Flags.string({
      default: async () => 'async fn default',
    }),
  }

  static args = {
    optionalArg: Args.string(),
    defaultArg: Args.string({
      default: 'simple string default',
    }),
    defaultFnArg: Args.string({
      default: async () => 'async fn default',
    }),
  }

  static enableJsonFlag = true

  async run(): Promise<Result> {
    const {args, flags} = await this.parse(ESM2)
    this.log(`hello I am an ESM plugin from ${this.config.root}!`)
    return {args, flags}
  }
}
