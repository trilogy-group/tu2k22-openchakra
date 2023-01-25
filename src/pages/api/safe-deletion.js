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

    let result = false
    let jsonVal = JSON.parse(fileContent)
    let jsonKeys = Object.keys(jsonVal)
    for (let i = 0; i < jsonKeys.length; i++) {
      if (
        jsonVal[jsonKeys[i]]['type'].toLowerCase() ==
        componentDelete.toLowerCase()
      ) {
        result = true
      }
    }

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
