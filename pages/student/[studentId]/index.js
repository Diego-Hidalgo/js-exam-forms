import 'bootstrap/dist/css/bootstrap.css'
import { logout } from '../../utils/validateLogged'

export default function create() {

  const QUEST_PATH = '/api/exams'

  let signOutCurrentUser = () => {
    logout()
    window.location.href = '/'
  }

  let loadExams = async () => {

    let url;
    if (typeof window !== "undefined") {
      url = window.location.href
    }
    let url_pieces = url.split('/')
    
    let addIn = document.getElementById('addHere')
    let div = document.createElement('div')
    let res = await fetch(QUEST_PATH)

    let js = await res.json()
    for(let i = 0; i < js.length; i ++) {
      div.innerHTML += "<div class='d-flex flex-row>'>" +
      "<div class='mx-10 card card-container' style='margin: 10px'>"+
        "<div class='card-body'>" +
          "<h5 class='card-title'> EXAM #" + (i+1) + "</h5>" +
          "<p class='card-text'>" + js[i].id + "</p>"+
          "<a href='"+url_pieces[4]+"/exam/"+ js[i].id +"' class='btn btn-primary'> Take Exam </a>" +
        "</div>"+
      "</div>"
    }
    addIn.innerHTML = ''
    addIn.appendChild(div)
  }

  return (
    <div>
      <main>
        <section>
          <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
            <button class="btn btn-danger" onMouseDown={signOutCurrentUser}>
              LOG OUT
            </button>
          </nav>
        </section>
        <section class="vh" style={{backgroundColor: '#2779e2'}} onLoad={loadExams()}>
          <div class="d-flex flex-row justify-content-center align-items-center">
            <h1 class="text-white mb-4">Welcome</h1>
          </div>
          <div id="addHere" class="d-flex flex-column align-items-center"></div>
        </section>
      </main>
    </div>
  )
}