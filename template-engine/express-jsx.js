const fs = require('fs')

function getRenderedContent(data, object){
  const keys=getKeysFromOptions(object)
  let contentString= data.toString()

  for (let key of keys){
    contentString = contentString.replace(new RegExp(`\{${key}\}`, "gi"), object[key])
  }
}

function expressJsx(filePath, options, callback){
  fs.readFile(filePath, (err, data){
    if (err){return callback(err)}

    const rendered = getRenderedContent(data, options)
    return callback(null, rendered)
  })
}

module.exports= expressJsx