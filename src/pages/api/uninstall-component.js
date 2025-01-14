import shell from 'shelljs'
import { promises as fsp } from 'fs'
import fs from 'fs'
import { convertToPascal } from '~components/editor/Editor'

export default async function handler(req, res) {
  const fileName = req.body.path.split('.').slice(-1)[0]
  const componentName = convertToPascal(fileName)

  try {
    const deletePreview = fsp.unlink(
      `src/installed-components/${componentName}Preview.ic.tsx`,
    )
    await Promise.all([deletePreview])

    // shell.exec(`bit uninstall ${req.body.path}`)

    // 2.3 Write to installedList.json file
    let installedList = fs.readFileSync(
      '../../resources/installedList.json',
      'utf-8',
    )
    installedList = JSON.parse(installedList)
    delete installedList[componentName]
    fs.writeFileSync(
      '../../resources/installedList.json',
      JSON.stringify(installedList, null, 2) + '\n',
      'utf-8',
    )

    res.status(200).json('success')
  } catch (err) {
    console.log(err)
  }
}
