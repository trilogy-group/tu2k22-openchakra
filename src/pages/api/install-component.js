import shell from 'shelljs'
import fs from 'fs'
import { convertToPascal } from '~components/editor/Editor'
import { generateICPreview } from '../../utils/code'
import { useSelector } from 'react-redux'
import { getComponents } from '~core/selectors/components'


export default async function handler(req, res) {
  const componentPath = req.body.path
  const component = req.body.path?.split('.').slice(-1)[0]

  try {
    // 1. Bit Install component
    shell.exec(`cd .. && bit install ${req.body.path}`)

    // 2.1 Generate preview code
    const componentName = convertToPascal(component)

    const previewCode = await generateICPreview(componentName, componentPath) 
    console.log(previewCode)

    // 2.2 Write the generated file
    fs.writeFileSync(
      `src/installed-components/${componentName}Preview.ic.tsx`,
      previewCode,
    )
    res.status(200).json(componentName)
  } catch (err) {
    console.log(err)
    res.status(400).json({ err })
  }
}