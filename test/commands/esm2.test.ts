import {expect, test} from '@oclif/test'

describe('hello', () => {
  test
  .stdout()
  .command(['esm2'])
  .it('runs esm2 cmd', ctx => {
    expect(ctx.stdout).to.contain('hello I am an ESM plugin')
  })
})
