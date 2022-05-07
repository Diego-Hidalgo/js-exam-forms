import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { signOut } from '/pages/utils/validateLogged'

export default function create() {
  const IMGPATH = "./pages/resources/Astronaut.jpg"
  const TEACHERNAME = "Brian Romero"
  const ROLE_NAME = ""
  const ID = ""

  let signOutCurrentUser= () =>{
    document.getElementById("creatBtn").disable = true
    document.getElementById("singOutBtn").disable = true
    signOut()
    window.location.href = '/'
  }

  let goToCreateQuiz = () =>{
    window.location.href = window.location.href + "/create"
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
        <div id = "userInfo" class="d-flex justify-content-center">
          <div class="d-flex align-items-stretch">
            <div><img src={IMGPATH} alt = "An astronaut" /></div>
            <div class="d-flex flex-column">
              <div class="p-2">
                <h3>Bienvenido, {TEACHERNAME} </h3>
                </div>
              <div class="p-2">
              <button type = "button" onMouseDown = {goToCreateQuiz} class="btn btn-success" id = "creatBtn">Create exam</button>
              <div class='w-15 p-3' id = 'paddle_afterQuestions'></div>
              <button type = "button" onMouseDown = {signOutCurrentUser} class="btn btn-success" id = "singOutBtn">Sign Out</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}