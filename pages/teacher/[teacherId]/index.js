import 'bootstrap/dist/css/bootstrap.css'
import { logout } from '../../utils/validateLogged'

export default function create() {

  let signOutCurrentUser= () =>{
    document.getElementById("creatBtn").disable = true
    document.getElementById("singOutBtn").disable = true
    logout()
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
            <div class="d-flex flex-column">
              <div class="p-2">
                <h3>Bienvenido </h3>
                </div>
              <div class="p-2">
              <button type = "button" onMouseDown = {goToCreateQuiz} class="btn btn-success" id = "creatBtn">Create exam</button>
              <div class='w-15 p-3' id = 'paddle_afterQuestions'></div>
              <button type = "button" onMouseDown = {signOutCurrentUser} class="btn btn-danger" id = "singOutBtn">Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}