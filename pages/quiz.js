import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

export default function quizForm(){

    let addQuestion = () => {
        alert("You have been registered")
        var question = document.getElementById("questionSection");
        var div = document.createElement("div");
        div.innerHTML = "<input type='text' placeholder='Ingrese aqui la pregunta'>"+
            "<div id = 'firts_question'>"+
            "<input type='radio' name = 'answer'>"+
            "<input type='text'>"+
            "</div>"+
            "<div id = 'Second_question'>"+
            "<input type='radio' name = 'answer'>"+
            "<input type='text'>"+
            "</div>"+
            "<div id = 'Third_question'>"+
            "<input type='radio' name = 'answer'>"+
            "<input type='text'>"+
            "</div>"+
            "<div id = 'Fourth_question'>"+
            "<input type='radio' name = 'answer'>"+
            "<input type='text'>"+
            "</div>"
        question.appendChild(div);
      }

    return (
        <div>
            <div id = "questionSection"></div>
            <button onclick = {addQuestion}>Add question</button>
        </div>
    )
}