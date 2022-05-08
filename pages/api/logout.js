const fs = require('fs')
const PATH = 'pages/DATA/current.json'

export default (req, res) => {
  let myDB = JSON.parse(fs.readFileSync(PATH))
  myDB = []
  fs.writeFileSync(PATH, JSON.stringify(myDB))
  return res.status(200)
}