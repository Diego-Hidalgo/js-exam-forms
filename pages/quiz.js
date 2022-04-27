import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

export default function quizForm(){

    let addQuestion = () => {
        alert("You have been registered")
        var question = document.getElementById("questionSection");
        var div = document.createElement("div");
        div.innerHTML = ""
        question.appendChild(div);
      }

    return (
        <div>
            <div id = "questionSection"></div>
            <button onclick = {addQuestion}>Add question</button>
        </div>
    )
}