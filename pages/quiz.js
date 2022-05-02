import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { makePublicRouterInstance } from 'next/router'

let quest = 1;
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
        "<span class='input-group-text' id='basic-addon1'>"+quest+"</span>"+
        "</div>"+
        "<input type='text' placeholder='Ingrese aqui la pregunta' size = 100 id = Q-\'"+quest+"-1\' >"+
      "</div>"+
        "<div class='h-50 d-inline-block'></br></div>"+
        "<div class='d-flex align-items-center' id = 'first-row'>"+
          "<div class='input-group mb-3' id = 'first_question'>"+
            "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+quest+"-a\' checked>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 1' size = 45 id = \'"+quest+"-1\'>"+
          "</div>"+
          "<div class='input-group mb-3' id = 'Second_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+quest+"-b\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 2' size = 45 id = \'"+quest+"-2\'>"+
          "</div>"+
        "</div>"+
        "<div class='w-50 p-3' id = 'middle-row'></div>"+
        "<div class='d-flex align-items-center' id = 'second-row'>"+
          "<div class='input-group mb-3' id = 'Third_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+quest+"-c\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 3' size = 45 id = \'"+quest+"-3\'>"+
          "</div>"+
          "<div class='input-group mb-3' id = 'Fourth_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+quest+"-d\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 4' size = 45 id = \'"+quest+"-4\'>"+
          "</div>"+
        "</div>"+
        "</div>"+
      "</div>"+
      "<div class='w-50 p-3' id = 'paddle_afterQuestions'></div>";
      question.appendChild(div);
      quest += 1;
  }

  let sendQuestions = () =>{
    if(checkFields)
      alert(".value")
  }

  let checkFields = () => {
    var check = false;
    var letter = ['a','b','c','d']
    for(let i = 1; i <= quest && !check; i++){
      var q_head = document.getElementById("Q-"+i);
      var q1 = document.getElementById(i+"-1");
      var q2 = document.getElementById(i+"-2");
      var q3 = document.getElementById(i+"-3");
      var q4 = document.getElementById(i+"-4");
      check = (q_head == "")?true:false;
      check = (q2 == "" && !check)?true:false;
      check = (q3 == "" && !check)?true:false;
      check = (q4 == "" && !check)?true:false;
      }//End for
      return check;
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