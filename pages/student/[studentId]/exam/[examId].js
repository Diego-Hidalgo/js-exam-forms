import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { getExamById, getAnswersById } from '/pages/utils/manageExams'
import { moveToUserHome } from '/pages/utils/validateLogged'

export default function create() {
  const MAX_GRADE = 5.0
  let url;
  if (typeof window !== "undefined") {
    url = window.location.href
  }
  let question;
  let currentExamId = ""

  let loadQuestions = async () => {
    var url_pieces = url.split('/')
    currentExamId = url_pieces[6]
    question = await getExamById(currentExamId)

    let quiz = document.getElementById('questionSection');
    var div = document.createElement("div");
    quiz.innerHTML = "<div id = 'questionSection' class='d-flex justify-content-center'></div>"
    var questionsHead = (question.question_header).split(";")
    var question1 = (question.question_1).split(";")
    var question2 = (question.question_2).split(";")
    var question3 = (question.question_3).split(";")
    var question4 = (question.question_4).split(";")

    for(let i = 0; i < questionsHead.length;i++){
      div.innerHTML += "<div class='d-flex flex-column'>" +
        "<div class='d-flex justify-content-center' id = 'questionHeader'>"+
        "<div class='d-flex align-items-center'>"+
            "<div class='input-group'>"+
              "<div class='d-flex flex-row'>"+
                "<span class='input-group-text' id='basic-addon1'>"+(i+1)+"</span>"+
                "<span class='input-group-text' id = 'head'>"+questionsHead[i]+"</span>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div id = 'answers' class='d-flex flex-column'>"+
          "<div class='d-flex flex-row'>"+
            "<div class='d-flex flex-row align-items-center' style='margin: 6px'>" +
              "<div class='input-group-prepend d-flex flex-row align-items-center' style='margin: 6px'>"+
                "<input type='radio' name = 'answer"+(i+1)+"\' id = \'"+(i+1)+"-a\'>"+
                "<span class='input-group-text'>"+question1[i]+"</span>"+
              "</div>"+
              "<div class='input-group-prepend d-flex flex-row align-items-center' style='margin: 6px'>"+
                "<input type='radio' name = 'answer"+(i+1)+"\' id = \'"+(i+1)+"-a\'>"+
                "<span class='input-group-text'>"+question2[i]+"</span>"+
              "</div>"+
            "</div>"+
          "</div>"+
          "<div class='d-flex flex-row'>"+
            "<div class='d-flex flex-row align-items-center' style='margin: 6px'>" +
              "<div class='input-group-prepend d-flex flex-row align-items-center' style='margin: 6px'>"+
                "<input type='radio' name = 'answer"+(i+1)+"\' id = \'"+(i+1)+"-a\'>"+
                "<span class='input-group-text'>"+question3[i]+"</span>"+
              "</div>"+
              "<div class='input-group-prepend d-flex flex-row align-items-center' style='margin: 6px'>"+
                "<input type='radio' name = 'answer"+(i+1)+"\' id = \'"+(i+1)+"-a\'>"+
                "<span class='input-group-text'>"+question4[i]+"</span>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class='w-50 p-3' id = 'paddle_afterQuestions'></div>"+
      "</div>"
      quiz.appendChild(div);
    }//End for
  }//End

  let qualify = async () => {
    let an = await getAnswersById(currentExamId)
    let correctAnswer = (an.answers).split(';')
    let givenAnswers = getAnswer(correctAnswer.length)
    let pointsPerAnswer = MAX_GRADE / correctAnswer.length
    let grade = 0.0;
    for(let i = 0; i < correctAnswer.length; i++){
      if(correctAnswer[i]==givenAnswers[i])
        grade += pointsPerAnswer
    }//End for
    alert("Your grade is "+grade+"/"+MAX_GRADE)
    document.getElementById("sendBtn").disabled = true
    moveToUserHome()
  }

  function getAnswer(length){
    let elements = []
    let aux = (document.querySelector("input[name=\'answer"+(1)+"\']:checked"));
    if(aux != null){elements.push(aux.id)}
    for(let i = 2; i <= length; i++){
      aux = (document.querySelector("input[name=\'answer"+(i)+"\']:checked"));
      if(aux != null){elements.push(aux.id)}
    }//End for
    return elements
  }//End getAnswer

  return (
    <div>
      <section>
        <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
          <a class="navbar-brand" href="/">
          <h5>js-exam-forms</h5>
          </a>
        </nav>
      </section>
      <section class="vh-100" style={{backgroundColor: '#2779e2'}} onLoad={loadQuestions()}>
        <div id = 'questionSection' class='d-flex justify-content-center'></div>
        <div class='d-flex justify-content-center' id = "Btn_section" style={{backgroundColor: '#2779e2'}}>
          <button type = "button" onMouseDown = {qualify} class="btn btn-success" id = "sendBtn">Send answers</button>
        </div>
      </section>
    </div>
  )
}