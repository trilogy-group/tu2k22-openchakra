import shell from 'shelljs'
import fs from 'fs'
import { convertToPascal } from '~components/editor/Editor'
import { generateExtendedPanel, generateExtendedPreview } from '~utils/code'

export default async function handler(req, res) {
  const component = req.body.path
  const repoName = shell.exec('REPO=${PWD%/*} && echo -n ${REPO##*/}').stdout
  const componentPath = `${repoName}/${component}`

  try {
    // 1. Create bit component
    shell.exec(`cd .. && bit create tiui-react ${componentPath}`)

    // 2 Generate preview & panel
    const componentName = convertToPascal(component)
    const [previewCode, panelCode] = await Promise.all([
      generateExtendedPreview(component),
      generateExtendedPanel(componentName),
    ])

    // 2.4 Create symlink
    shell.ln(
      '-sf',
      `../../../../remote/${componentPath}/${component}.tsx`,
      `src/custom-components/customOcTsx/${component}.tsx`,
    )

    // 2.5 Write the generated files
    const writePreview = fs.promises.writeFile(
      `src/custom-components/editor/previews/${componentName}Preview.oc.tsx`,
      previewCode,
    )
    const writePanel = fs.promises.writeFile(
      `src/custom-components/inspector/panels/components/${componentName}Panel.oc.tsx`,
      panelCode,
    )
    await Promise.all([writePreview, writePanel])

    // 3 Write to extendedList.json
    let extendedList = fs.readFileSync(
      'src/extended-components/extendedList.json',
      'utf-8',
    )
    extendedList = JSON.parse(extendedList)
    extendedList[component] = `../remote/${componentPath}`
    fs.writeFileSync(
      'src/extended-components/extendedList.json',
      JSON.stringify(extendedList),
      'utf-8',
    )

    res.status(200).json(componentPath)
  } catch (err) {
    console.log(err)
    res.status(400).json({ err })
  }
}
