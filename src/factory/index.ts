import { existsSync, mkdirSync, appendFile } from 'fs'
import { ProjectStack, ProjectInfo } from '../types'
import { Connection } from './types'

export default class Factory {
  private info: ProjectInfo
  private stack: ProjectStack

  constructor(info: ProjectInfo, stack: ProjectStack) {
    this.info = info
    this.stack = stack
  }

  projectDirectory: string = ''

  async createProjectDirectory() {
    const { name } = this.info
    const projectDirectory = `./${name}`

    if (!existsSync(projectDirectory)) {
      await mkdirSync(projectDirectory)
      this.projectDirectory = projectDirectory
    } else {
      throw new Error(`${name} already exists`)
    }
  }

  async createProjectArchitecture() {
    const { stack, projectDirectory } = this

    const srcDirectory = `${projectDirectory}/src`
    const testsDirectory = `${projectDirectory}/tests`

    await mkdirSync(srcDirectory)
    await mkdirSync(testsDirectory)

    if (stack.server === 'rest') {
      await mkdirSync(`${srcDirectory}/controllers`)
      await mkdirSync(`${srcDirectory}/middleware`)
      await mkdirSync(`${srcDirectory}/models`)
      await mkdirSync(`${srcDirectory}/routes`)
      await mkdirSync(`${srcDirectory}/utils`)
      await mkdirSync(`${srcDirectory}/validation`)
    } else if (stack.server == 'graphql') {
      await mkdirSync(`${srcDirectory}/middleware`)
      await mkdirSync(`${srcDirectory}/modules/user/mutations`)
      await mkdirSync(`${srcDirectory}/modules/user/queries`)
    }
  }

  async addProjectFiles() {
    const { projectDirectory, stack} = this

    let codePaths: Connection[] = []
    if (stack.server == 'rest') {
      codePaths = require('./connections/rest')
    } else if (stack.server == 'graphql') {
      codePaths = require('./connections/graphql')
    }

    for (const codePath of codePaths) {
      const cleanCode = this.cleanCode(codePath.from, stack)
      const destination = `${projectDirectory}${codePath.to}`

      await appendFile(destination, cleanCode, this.handleAppendError)
    }
  }

  private cleanCode(code: string, stack: ProjectStack) {
    const lines = code.split('\n')
    let stackArray = Object.values(stack).map( word => word.toLocaleUpperCase())
    stackArray.unshift('COMMON')
    
    let app: string[] = new Array()
    
    for (const line of lines) {
      const type = line.substring(0, 16).replace(/-|o/g, '')

      if (stackArray.includes(type)) {
        const code = line.substring(17, line.length)
        app.push(code)
      }
    }

    return app.join('\n')
  }

  private handleAppendError (error: NodeJS.ErrnoException) {
    if (error) {
      throw error
    }
  }
}