import fs from 'fs/promises'
import { exists } from 'fs'
import { resolve } from 'path'
import generic from '../../assets/genericService.js'

const service = {
  create: async (name, path) => {
    // console.log('creating service...', name, path)
    try {
      console.info('creating service...', name, path, resolve(path))
      await fs.mkdir(`${path}services/${name}Service`)
      await fs.mkdir(`${path}services/${name}Service/src`)
      await fs.mkdir(`${path}services/${name}Service/src/functions`)
      await fs.mkdir(`${path}services/${name}Service/src/libs`)
      await fs.mkdir(`${path}services/${name}Service/src/functions/${name}`)
      await fs.
      await fs.appendFile(`${path}/services/${name}Service/serverless.ts`, generic.serverlessFile(name))
      await fs.appendFile(`${path}/services/${name}Service/tsconfig.json`, generic.tsconfigFile())
      await fs.appendFile(`${path}/services/${name}Service/tsconfig.paths.json`, generic.tsconfigPathsFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/functions/index.ts`, generic.indexFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/functions/${name}/index.ts`, generic.serviceIndexFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/functions/${name}/handler.ts`, generic.handlerFile(name))
      await fs.appendFile(`${path}/services/${name}Service/src/libs/handler-resolver.ts`, generic.handlerResolverFile(name))

      // const createService = await fs.writeFile(`${path}/${name}.js`, `const ${name} = {};\n\nexport default ${name};`)
      return { result: 0, error: null }
    } catch (error) {
      console.error('service.js.service error', error)
      return { result: 1, error }
    }
    
  }
}

export default service