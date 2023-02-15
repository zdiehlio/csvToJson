const fs = require('fs')
const csvToJson = require('csvtojson')

const writeStream = fs.createWriteStream('./data.json')
fs.createReadStream(process.env.npm_config_filePath || './mockData.csv', 'utf8')
  .on('error', (error) => console.error(error))
  .pipe(csvToJson({ downstreamFormat: 'array' }))
  .pipe(writeStream)
