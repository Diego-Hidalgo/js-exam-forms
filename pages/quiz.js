import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { makePublicRouterInstance } from 'next/router'
import { Alert } from 'bootstrap';

let quest = 0;

export default function quizForm(){
  let addQuestion = () => {
    quest++;
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
        "<input type='text' placeholder='Ingrese aqui la pregunta' size = 100 id = Q-\'"+quest+"\' >"+
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
   /* if(quest > 0){
      if(true)
      alert("Fill all fields before to send the questions")
    }else Alert("You haven't made questions")*/
  }

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