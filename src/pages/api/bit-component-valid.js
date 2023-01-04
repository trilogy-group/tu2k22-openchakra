import axios from 'axios'

function getUrl(packageName){
    var component
    component = packageName.replace('@', '/')
    const myArray = component.split('.')
    component = ''
    var arrayLen = myArray.length
    for (var i = 0; i < arrayLen; i++) {
    component += myArray[i]
    if (i != arrayLen - 1) component += '/'
    }
    component = "https://bit.cloud" + component;
    return component
}

export default async function handler(req, res) {
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

    // BIT Validate component exists

    var isValid = true;

    var config = {
        method: 'get',
        url: getUrl(path),
        headers: { 
          'authority': 'bit.cloud', 
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8', 
          'cookie': cookieHeaders[0]
        }
      };
      
      await axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        isValid = false;
        // console.log(error);
      });
    if(isValid){
        res.status(200).json('BIT Component Valid')
    }
    else{
        res.status(404).json('Component does not exist on bit.cloud')
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({ err })
  }
}
