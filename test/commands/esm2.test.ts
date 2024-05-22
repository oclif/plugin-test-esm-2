import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('esm2', () => {
  it('runs esm2 cmd', async () => {
    const {stdout} = await runCommand(['esm2'])
    expect(stdout).to.contain('hello I am an ESM plugin')
  })
})
