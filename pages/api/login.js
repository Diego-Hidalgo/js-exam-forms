const fs = require('fs')
const PATH = 'pages/DATA/current.json'

export default (req, res) => {
  let myDB = JSON.parse(fs.readFileSync(PATH))
  const { method, body } = req
  switch(method) {
    case 'GET':
      return res.status(200).json(myDB)
    case 'POST':
      myDB.push({
        id: body.id,
        name: body.name,
        role: body.role
      })
      fs.writeFileSync(PATH, JSON.stringify(myDB))
      return res.status(200)
  }
}