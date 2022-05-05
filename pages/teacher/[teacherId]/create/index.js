import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { makePublicRouterInstance } from 'next/router'
import { moveToUserHome } from '/pages/utils/validateLogged'

const QUESTIONS_PATH = '/api/exams'
const ANSWERS_PATH = '/api/answers'
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
            "<input type='radio' name = 'answer"+(quest+1)+"\' id = \'"+(quest+1)+"-a\' checked>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 1' size = 45 id = \'"+(quest+1)+"-1\'>"+
          "</div>"+
          "<div class='input-group mb-3' id = 'Second_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer"+(quest+1)+"\' id = \'"+(quest+1)+"-b\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 2' size = 45 id = \'"+(quest+1)+"-2\'>"+
          "</div>"+
        "</div>"+
        "<div class='w-50 p-3' id = 'middle-row'></div>"+
        "<div class='d-flex align-items-center' id = 'second-row'>"+
          "<div class='input-group mb-3' id = 'Third_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer"+(quest+1)+"\' id = \'"+(quest+1)+"-c\'>"+
            "</div>"+
            "<input type='text' placeholder='Ingrese respuesta 3' size = 45 id = \'"+(quest+1)+"-3\'>"+
          "</div>"+
          "<div class='input-group mb-3' id = 'Fourth_question'>"+
          "<div class='input-group-prepend'>"+
            "<input type='radio' name = 'answer"+(quest+1)+"\' id = \'"+(quest+1)+"-d\'>"+
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

  let sendQuestions = async () => {
    if(quest >0){
      if(checkFields()){
        let id = Math.floor(Math.random() * (9999-1000)+1000)
        let Qmsg = await saveQuestions(id)
        saveAnswers(id)
        alert(Qmsg)
        document.getElementById("sendBtn").disabled = true
        document.getElementById("addBtn").disabled = true
        document.getElementById("backBtn").disabled = true
        moveToUserHome()
      }else {
        alert("Fill all fields before to send the questions")}
    }else{alert("Add a question first")}//End if..else
  }//End sendQuestion

  async function saveAnswers(ids) {
    let elements = getAnswer()
        const settings = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'  
          },
          body: JSON.stringify({
            id: ids,
            answers: elements
          })
        }
        let resGet = await fetch(ANSWERS_PATH, settings)
        let display = await resGet.json()
        return display.msg
  }//Save Answers

  async function saveQuestions (ids){
    let elements = getQuestionElements()
        const settings = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'  
          },
          body: JSON.stringify({
            id: ids,
            question_header: elements[0],
            question_1: elements[1],
            question_2: elements[2],
            question_3: elements[3],
            question_4: elements[4]
          })
        }
        let resGet = await fetch(QUESTIONS_PATH, settings)
        let display = await resGet.json()
        return display.msg
  }
  function getAnswer(){
    let elements = document.querySelector("input[name=\'answer"+(1)+"\']:checked").id;
    for(let i = 2; i <= quest; i++){
      elements += ";"+ document.querySelector("input[name=\'answer"+(i)+"\']:checked").id
    }//End for
    return elements
  }//End getAnswer

  function getQuestionElements(){
    let elements = [];
    elements.push(document.getElementById("Q-1").value);
    elements.push(document.getElementById("1-1").value);
    elements.push(document.getElementById("1-2").value);
    elements.push(document.getElementById("1-3").value);
    elements.push(document.getElementById("1-4").value);
    for(let i = 2; i <= quest; i++){
      elements[0] = elements[0] + ";" + document.getElementById("Q-"+i).value
      elements[1] = elements[1] + ";" + document.getElementById(i+"-1").value
      elements[2] = elements[2] + ";" + document.getElementById(i+"-2").value
      elements[3] = elements[3] + ";" + document.getElementById(i+"-3").value
      elements[4] = elements[4] + ";" + document.getElementById(i+"-4").value
    }//End for
    return elements;
  }//End getQuestionElements

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
            <button type = "button" onMouseDown= {addQuestion} class="btn btn-warning" id = "addBtn">Add question</button>
            <div class='w-15 p-3' id = 'paddle_afterQuestions'></div>
            <button type = "button" onMouseDown = {moveToUserHome} class="btn btn-danger" id = "backBtn">Back to Home</button>
            <div class='w-15 p-3' id = 'paddle_afterQuestions'></div>
            <button type = "button" onMouseDown = {sendQuestions} class="btn btn-success" id = "sendBtn">Send Questions</button>
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