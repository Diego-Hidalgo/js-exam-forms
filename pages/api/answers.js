const fs = require('fs')
const PATH = 'pages/DATA/answers.json'

export default (req, res) => {
  let myDB = JSON.parse(fs.readFileSync(PATH))
  const { method, body } = req
  switch (method) {
    case 'GET':
     return res.status(200).json(myDB)
    case 'POST':
      myDB.push({
        id: body.id,
        answers: body.answers
      });
      fs.writeFileSync(PATH, JSON.stringify(myDB))
      return res.status(200).json({msg: "Question has been added"})
    default:
      res.status(400).json({msg: "Petition Not Allowed"})
  }
}