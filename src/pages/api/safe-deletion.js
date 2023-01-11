import fs from 'fs'

export default async function handler(req, res) {
  let listUsed = []
  const componentDelete = req.body.componentDelete
  const jsons = req.body.customCmp

  Object.keys(jsons).map(async component => {
    const fileContent = fs.readFileSync(
      `${jsons[component]}/${component}.oc.json`,
      { encoding: 'utf-8' },
    )
    let result = fileContent
      .toLowerCase()
      .includes(componentDelete.toLowerCase())
    if (result) {
      listUsed.push(component)
    }
  })

  try {
    res.statusCode = 200
    res.json({ listUsed })
  } catch (err) {
    console.log(err)
    res.statusCode = 400
    res.json({ err })
  }
}
