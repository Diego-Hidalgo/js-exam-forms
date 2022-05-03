import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { makePublicRouterInstance } from 'next/router'

let quest = 0;
export default function quizForm(){
  let addQuestion = () => {
    console.log("Agregando formulario...")
    var question = document.getElementById("questionSection");
    var div = document.createElement("div");
    div.innerHTML =
      "<div class='d-flex justify-content-center'>"+
      "<div class='d-flex flex-column'>"+
      "<div class='input-group mb-3'>"+
        "<div class='input-group-prepend'>"+
        "<span class='input-group-text' id='basic-addon1'>"+(quest+1)+"</span>"+
        "</div>"+
        "<input type='text' placeholder='Ingrese aqui la pregunta' size = 100 id =\'Q-"+(quest+1)+"\' >"+
      "</div>"+
        "<div class='h-50 d-inline-block'></br></div>"+
        "<div class='d-flex align-items-center' id = 'first-row'>"+
          "<div class='input-group mb-3' id = 'first_question'>"+
            "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+(quest+1)+"-a\' checked>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 1' size = 45 id = \'"+(quest+1)+"-1\'>"+
          "</div>"+
          "<div class='input-group mb-3' id = 'Second_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+(quest+1)+"-b\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 2' size = 45 id = \'"+(quest+1)+"-2\'>"+
          "</div>"+
        "</div>"+
        "<div class='w-50 p-3' id = 'middle-row'></div>"+
        "<div class='d-flex align-items-center' id = 'second-row'>"+
          "<div class='input-group mb-3' id = 'Third_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+(quest+1)+"-c\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 3' size = 45 id = \'"+(quest+1)+"-3\'>"+
          "</div>"+
          "<div class='input-group mb-3' id = 'Fourth_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+(quest+1)+"-d\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 4' size = 45 id = \'"+(quest+1)+"-4\'>"+
          "</div>"+
        "</div>"+
        "</div>"+
      "</div>"+
      "<div class='w-50 p-3' id = 'paddle_afterQuestions'></div>";
      question.appendChild(div);
      quest += 1;
  }

  let sendQuestions = () => {
    if(quest >0){
      if(checkFields()){
        header;
        q1;
        q2;
        q3;
        q4;
        const settings = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            question_header:,
            question_1:,
            question_2:,
            question_3:,
            question_4:
          })
        }
      }else {
        alert("Fill all field before to send the questions")}
    }else{alert("Add a question first")}//End if..else
  }//End sendQuestion

  function checkFields() {
    var fill = true;
    for(let i = 1; i <= quest && fill; i++){
      var q_head = document.getElementById("Q-"+i);
      var q1 = document.getElementById(i+"-1");
      var q2 = document.getElementById(i+"-2");
      var q3 = document.getElementById(i+"-3");
      var q4 = document.getElementById(i+"-4");
      fill = (q_head.value == "")?false:true;
      fill = (q1.value == "" && fill)?false:true;
      fill = (q2.value == "" && fill)?false:true;
      fill = (q3.value == "" && fill)?false:true;
      fill = (q4.value == "" && fill)?false:true;
      }//End for
      return fill;
    }//End checkFields

  return (
    <div>
      <section>
        <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
          <a class="navbar-brand" href="/">
            <h5>js-exam-forms</h5>
           </a>
        </nav>
      </section>
      <section class="vh-100" style={{backgroundColor: '#2779e2'}}>
        <div class='w-100 p-3' id = "top-padding"></div>
        <div id = "questionSection" style={{backgroundColor: '#2779e2'}}>
          </div>
          <div class='d-flex justify-content-center' id = "addQuestion" style={{backgroundColor: '#2779e2'}}>
            <button type = "button" onMouseDown= {addQuestion} class="btn btn-warning">Add question</button>
            <div class='w-15 p-3' id = 'paddle_afterQuestions'></div>
            <button type = "button" onMouseDown = {sendQuestions} class="btn btn-success">Send Questions</button>
          </div>
          <div class='d-flex justify-content-center' id = "addQuestion" style={{backgroundColor: '#2779e2'}}>
            <div class='h-50 d-inline-block' style={{backgroundColor: '#2779e2'}}>
              <br/>
            </div>
          </div>
        </section>
      </div>
  )
}