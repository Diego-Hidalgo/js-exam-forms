import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { getExamById } from '/pages/utils/manageExams'

export default function create() {
  //url = window.location.href
  let question;
  let quest = 0;
  let loadQuestions = async () => {
    //var url_pieces = url.split('/')
    question = await getExamById(2989)
    kya()
  }

  async function kya(){
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
            "<div class='input-group mb-3'>"+
              "<div class='w-100 p-3'>"+
                "<span class='input-group-text' id='basic-addon1'>"+(i+1)+"</span>"+
                "<span class='input-group-text' id = 'head'>"+questionsHead[i]+"</span>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div id = 'answers'>"+
          "<div class='d-flex align-items-center' id = 'first_row'>"+
            "<div id = 'first_question'>"+
              "<div class='input-group-prepend'>"+
                "<input type='radio' name =  "+(i+1)+" id = \'"+(i+1)+"-a\' checked>"+
              "</div>"+
              "<span>"+question1[i]+"</span>"+
            "</div>"+
            "<div id = 'second_question'>"+
              "<div class='input-group-prepend'>"+
                "<input type='radio' name =  "+(i+1)+" id = \'"+(i+1)+"-b\' checked>"+
              "</div>"+
              "<span>"+question2[i]+"</span>"+
            "</div>"+
          "</div>"+
          "<div class='d-flex align-items-center' id = 'second_row'>"+
            "<div id = 'third_question'>"+
              "<div class='input-group-prepend'>"+
                "<input type='radio' name =  "+(i+1)+" id = \'"+(i+1)+"-c\' checked>"+
              "</div>"+
              "<span>"+question3[i]+"</span>"+
            "</div>"+
            "<div id = 'fourth_question'>"+
              "<div class='input-group-prepend'>"+
                "<input type='radio' name =  "+(i+1)+" id = \'"+(i+1)+"-d\' checked>"+
              "</div>"+
              "<span>"+question4[i]+"</span>"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class='w-50 p-3' id = 'paddle_afterQuestions'></div>"+
      "</div>"
      quiz.appendChild(div);
    }//End for
  }//End

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
          <button type = "button" onMouseDown = {""} class="btn btn-success" id = "sendBtn">Send answers</button>
        </div>
      </section>
    </div>
  )
}