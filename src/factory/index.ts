import { existsSync, mkdirSync, appendFile } from 'fs'
import { ProjectStack, ProjectInfo } from '../types'
import { Connection } from './types'

export default class Factory {
  private info: ProjectInfo
  private stack: ProjectStack
  private path: string

  constructor(info: ProjectInfo, stack: ProjectStack, path: string) {
    this.info = info
    this.stack = stack
    
    // Clean path
    if (path[path.length - 1] === '/') {
      path = path.slice(0, -1)
    }

    this.path = path
  }

  projectPath: string = ''

  async createProjectPath() {
    const { name } = this.info
    const projectPath = `${this.path}/${name}`

    if (!existsSync(projectPath)) {
      await mkdirSync(projectPath)
      this.projectPath = projectPath
    } else {
      throw new Error(`${name} already exists`)
    }
  }

  async createProjectArchitecture() {
    const { stack, projectPath } = this

    const srcPath = `${projectPath}/src`
    const testsPath = `${projectPath}/tests`
    const databasePath = `${projectPath}/database`

    await mkdirSync(srcPath)
    await mkdirSync(testsPath)
    await mkdirSync(`${databasePath}`)

    await mkdirSync(`${testsPath}/routes`)
    await mkdirSync(`${testsPath}/routes/v1`)

    await mkdirSync(`${databasePath}/migrations`)
    await mkdirSync(`${databasePath}/seeds`)

    await mkdirSync(`${srcPath}/validation`)
    await mkdirSync(`${srcPath}/middleware`)
    await mkdirSync(`${srcPath}/utils`)

    if (stack.server === 'rest') {
      await mkdirSync(`${srcPath}/controllers`)
      await mkdirSync(`${srcPath}/models`)
      await mkdirSync(`${srcPath}/routes`)
      await mkdirSync(`${srcPath}/routes/v1`)
    } else if (stack.server === 'graphql') {
      await mkdirSync(`${srcPath}/modules`)
      await mkdirSync(`${srcPath}/modules/user`)
      await mkdirSync(`${srcPath}/modules/user/mutations`)
      await mkdirSync(`${srcPath}/modules/user/queries`)
    }
  }

  async addProjectFiles() {
    const { projectPath, stack } = this

    let codePaths: Connection[] = []
    if (stack.server === 'rest') {
      codePaths = require('./connections/rest')
    } else if (stack.server === 'graphql') {
      codePaths = require('./connections/graphql')
    }

    for (const codePath of codePaths) {
      const cleanCode = this.cleanCode(codePath.from, stack)
      const destination = `${projectPath}${codePath.to}`

      await appendFile(destination, cleanCode, this.handleAppendError)
    }
  }

  private cleanCode(code: string, stack: ProjectStack) {
    const { name } = this.info

    const lines = code.split('\n')
    let stackArray = Object.values(stack).map(word => word.toLocaleUpperCase())
    stackArray.unshift('COMMON', 'PROJECT_NAME')

    let app: string[] = new Array()

    for (const line of lines) {
      const type = line.substring(0, 16).replace(/-|o/g, '')
      let code = line.substring(17, line.length)

      if (!stackArray.includes(type)) {
        continue
      }

      if (type === 'PROJECT_NAME') {
        code = code.replace(/{pn}/g, `${name}`)
      }

      app.push(code)
    }

    return app.join('\n')
  }

  private handleAppendError(error: NodeJS.ErrnoException) {
    if (error) {
      throw error
    }
  }
}