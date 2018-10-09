import { Command, flags } from '@oclif/command'
import { prompt } from 'inquirer'

import Factory from '../factory'
import { projectInfo, projectStack } from '../questions'
import { ProjectInfo, ProjectStack } from '../types'

export default class Init extends Command {
  static description = 'all things begin somewhere'

  async run() {

    const info: ProjectInfo = await prompt(projectInfo) as ProjectInfo
    const stack: ProjectStack = await prompt(projectStack) as ProjectStack

    const factory = new Factory(info, stack)

    try {
      await factory.createProjectDirectory()
      await factory.createProjectArchitecture()
      await factory.addProjectFiles()
    } catch (error) {
      this.error(error.message)
    }

  }
}