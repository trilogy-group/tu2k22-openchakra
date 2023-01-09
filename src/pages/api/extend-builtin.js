import shell from 'shelljs'
import fs from 'fs'
import { convertToPascal } from '~components/editor/Editor'
import { ExtendBuiltInPanel, ExtendBuiltInPreview } from '../../utils/code'

export default async function handler(req, res) {
  const component = req.body.path?.split('/').slice(-1)[0]
  const repoName = shell.exec('REPO=${PWD%/*} && echo -n ${REPO##*/}').stdout
  const componentPath = `${repoName}/${component}`


  try {

    shell.exec(`cd .. && bit create tiui-react ${componentPath}`)
    const componentName = convertToPascal(component)
    const [previewCode, panelCode] = await Promise.all([
      ExtendBuiltInPreview(componentName, component),
      ExtendBuiltInPanel(componentName),
    ])
    shell.ln(
      '-sf',
      `../../../../remote/${req.body.path}/${component}.tsx`,
      `src/custom-components/customOcTsx/${component}.tsx`,
    )
      console.log("done2")
    const writePreview = fs.promises.writeFile(
      `src/custom-components/editor/previews/${componentName}Preview.oc.tsx`,
      previewCode,
    )
    const writePanel = fs.promises.writeFile(
      `src/custom-components/inspector/panels/components/${componentName}Panel.oc.tsx`,
      panelCode,
    )
    await Promise.all([writePreview, writePanel])

    res.status(200).json(component)
  } catch (err) {
    console.log(err)
    res.status(400).json({ err })
  }
}
