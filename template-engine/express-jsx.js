const fs = require('fs')

function getKeysFromOptions(options){
  const {settings, _locals, ...objectKeys } = options
  return Object.keys(objectKeys)
}

function getRenderedContent(data, object){
  const keys=getKeysFromOptions(object)
  let contentString= data.toString()

  for (let key of keys){
    contentString = contentString.replace(
      new RegExp(`\{${key}\}`, "gi"), 
      object[key]
    )
  }

  return contentString
}

function expressJsx(filePath, options, callback){
  fs.readFile(filePath, (err, data) => {
    if (err){return callback(err)}

    const rendered = getRenderedContent(data, options)
    return callback(null, rendered)
  })
}

module.exports= expressJsx