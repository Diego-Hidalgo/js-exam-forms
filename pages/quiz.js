import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { makePublicRouterInstance } from 'next/router'

export default function quizForm(){
  let addQuestion = () => {
      console.log("Agregando formulario...")
      var question = document.getElementById("questionSection");
      var div = document.createElement("div");
      div.innerHTML =
        "<div class='d-flex justify-content-center'>"+
          "<input type='text' placeholder='Ingrese aqui la pregunta'></div>"+
          "<div id = 'first-row'>"
              "<div id = 'first_question'>"+
                "<input type='radio' name = 'answer'>"+
                "<input type='text'>"+
              "</div>"+
              "<div id = 'Second_question'>"+
                "<input type='radio' name = 'answer'>"+
                "<input type='text'>"+
          "</div></div>"+
          "<div id = 'Third_question'>"+
          "<input type='radio' name = 'answer'>"+
          "<input type='text'>"+
          "</div>"+
          "<div id = 'Fourth_question'>"+
          "<input type='radio' name = 'answer'>"+
          "<input type='text'>"+
          "</div>"
      question.appendChild(div);
     // document.getElementById("hellobutton").addEventListener("addQuestionBtn", addQuestion);
  }

  return (
      <div>
          <div id = "questionSection"></div>
          <button type = "button" onMouseDown= {addQuestion} >Add question</button>
      </div>
  )
}