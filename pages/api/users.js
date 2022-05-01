const fs = require('fs')
const PATH = 'pages/DATA/database.json'

export default (req, res) => {
  let myDB = JSON.parse(fs.readFileSync(PATH))
  const { method, body } = req
  switch (method) {
    case 'GET':
     return res.status(200).json(myDB)
    case 'POST':
      const resPost = myDB.find(x => x.id == body.id)
      if(resPost == null) {
        myDB.push({
          id: body.id,
          password: body.password,
          firstName: body.firstName,
          lastName: body.lastName,
          role: body.role
        });
        fs.writeFileSync(PATH, JSON.stringify(myDB))
        return res.status(200).json({msg: "User Successfully Created"})
      } else {
        return res.status(400).json({msg: "Id Already In Use"})
      }

    default:
      res.status(400).json({msg: "Petition Not Allowed"})
  }
}