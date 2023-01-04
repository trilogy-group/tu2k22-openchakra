import axios from 'axios'

function packageToComponent(packageName) {
  var component
  component = packageName.replace('@', '')
  const myArray = component.split('.')
  component = ''
  var arrayLen = myArray.length
  for (var i = 0; i < arrayLen; i++) {
    component += myArray[i]
    if (i != arrayLen - 1) component += '/'
  }
  component = component.replace('/', '.')
  return component
}

export default async function handler(req, res) {
  const component = req.body.component
  const path = req.body.path
  try {
    //BIT Login to get cookie

    var data = JSON.stringify({
      username: process.env.NEXT_BIT_USERNAME,
      password: process.env.NEXT_BIT_PASSWORD,
    })

    var config = {
      method: 'post',
      url: 'https://api.bit.cloud/user/login',
      headers: {
        authority: 'api.bit.cloud',
        accept: '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json'
      },
      data: data,
    }

    var cookieHeaders = []

    await axios(config)
      .then(function(response) {
        cookieHeaders = response.headers['set-cookie']
      })
      .catch(function(error) {
        console.log(error)
      })

    // BIT GraphQL API to get props of a component

    var data = JSON.stringify({
      query:
        '\n  query getComponentDocs($id: String!) {\n    getHost {\n      id # for gql caching\n      getDocs(id: $id) {\n        abstract\n        properties {\n          name\n          description\n          required\n          type\n          default: defaultValue {\n            value\n          }\n        }\n      }\n    }\n  }\n',
      variables: {
        id: packageToComponent(path),
      },
      operationName: 'getComponentDocs',
    })

    var config = {
      method: 'post',
      url: 'https://ghrqsfc.scopes.bit.cloud/graphql',
      headers: {
        authority: 'ghrqsfc.scopes.bit.cloud',
        accept: '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json',
        cookie: cookieHeaders[0],
      },
      data: data,
    }

    var parameters

    await axios(config)
      .then(function(response) {
        parameters = response.data['data']['getHost']['getDocs']['properties']
      })
      .catch(function(error) {
        console.log(error)
      })

    res.status(200).json(parameters)
  } catch (err) {
    console.log(err)
    res.status(400).json({ err })
  }
}
