const fs = require('fs')
const PATH = 'pages/DATA/questions.json'

export default (req, res) => {
  let questions = JSON.parse(fs.readFileSync(PATH))
  const { method, body } = req
  switch (method) {
    case 'GET':
     return res.status(200).json(questions)
    case 'POST':
      questions.push({
        id: body.id,
        question_header: body.question_header,
        question_1: body.question_1,
        question_2: body.question_2,
        question_3: body.question_3,
        question_4: body.question_4
      });
      fs.writeFileSync(PATH, JSON.stringify(questions))
      return res.status(200).json({msg: "Question has been added"})
    default:
      res.status(400).json({msg: "Petition Not Allowed"})
  }
}
