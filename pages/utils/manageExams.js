const EXAM_PATH = '/api/exams'
const ANSWERS_PATH = '/api/answers'

let redirectToExam = async (exam) =>{
  window.location.href = window.location.href + '/exam/'+  exam.id + '/'
  await fetch(EXAM_PATH,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify({
      exam: user.id,
    })
  })
  return exam
}

let getExamById= async (id) =>{
  let res = await fetch(EXAM_PATH)
  let js = await res.json()
  let exam;
  for(let i = 0; i < js.length; i++){
    if(js[i].id == id)
      exam = js[i]
  }//End for
  return exam
}

export{redirectToExam, getExamById}