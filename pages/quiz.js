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
        "<input type='text' placeholder='Ingrese aqui la pregunta' size = 100>"+
      "</div>"+
        "<div class='h-50 d-inline-block'></br></div>"+
        "<div class='d-flex align-items-center' id = 'first-row'>"+
          "<div class='input-group mb-3' id = 'first_question'>"+
            "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+quest+"-1\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 1' size = 45>"+
          "</div>"+
          "<div class='input-group mb-3' id = 'Second_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+quest+"-2\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 2' size = 45>"+
          "</div>"+
        "</div>"+
        "<div class='w-50 p-3' id = 'middle-row'></div>"+
        "<div class='d-flex align-items-center' id = 'second-row'>"+
          "<div class='input-group mb-3' id = 'Third_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+quest+"-3\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 3' size = 45>"+
          "</div>"+
          "<div class='input-group mb-3' id = 'Fourth_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer' id = \'"+quest+"-4\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 4' size = 45>"+
          "</div>"+
        "</div>"+
        "</div>"+
      "</div>"+
      "<div class='w-50 p-3' id = 'paddle_afterQuestions'></div>";
      question.appendChild(div);
      quest += 1;
  }

  let sendQuestions = () =>{
    alert(quest)
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