import { Command, flags } from '@oclif/command'
import { prompt } from 'inquirer'

import Factory from '../factory'
import { projectInfo, projectStack } from '../questions'
import { ProjectInfo, ProjectStack } from '../types'

export default class Init extends Command {
  static description = 'all things begin somewhere'

  static flags = {
    stack: flags.string(),
    path: flags.string()
  }

  async run() {

    const { flags: { stack: inlineStack, path = '.' } } = this.parse(Init)

    let info: ProjectInfo
    let stack: ProjectStack
    let factory

    if (!inlineStack) {
      info = await prompt(projectInfo) as ProjectInfo
      stack = await prompt(projectStack) as ProjectStack
      factory = new Factory(info, stack, path)
    } else {

      const inlineStackArray = inlineStack.split('-')

      info = {
        name: inlineStack
      }

      stack = {
        server: inlineStackArray[0],
        framework: inlineStackArray[1],
        database: inlineStackArray[2],
        orm: inlineStackArray[3],
        auth: inlineStackArray[4],
        validation: inlineStackArray[5],
        test: inlineStackArray[6]
      }
    }

    factory = new Factory(info, stack, path)

    try {
      await factory.createProjectPath()
      await factory.createProjectArchitecture()
      await factory.addProjectFiles()
    } catch (error) {
      this.error(error.message)
    }

  }
}