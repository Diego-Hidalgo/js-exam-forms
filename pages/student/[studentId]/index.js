import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { logout } from '../../utils/logout'

export default function create() {  
  return (
    <div>
      <Head>

      </Head>
      <main>
        <section>
          <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
            <button class="btn btn-danger" onMouseDown={logout}>
              LOG-OUT
            </button>
          </nav>
        </section>
        <section class="vh-100" style={{backgroundColor: '#2779e2'}}>
          <div class="d-flex flex-row justify-content-center align-items-center">
            <h1 class="text-white mb-4">Welcome</h1>
          </div>
          <div id="addHere" class="d-flex flex-column align-items-center">
            <div class="d-flex flex-row">
              <div class="mx-10 card card-container" style={{width: 18 + 'rem', padding: 20 + 'px', margin: 10}}>
                <div class="card-body">
                  <h5 class="card-title">Exam title</h5>
                  <p class="card-text">Provide a brief optional description for the exam</p>
                  <a href="" class="btn btn-primary">Application Page</a>
                </div>
              </div>
              <div class="card card-container" style={{width: 18 + 'rem', padding: 20 + 'px', margin: 10}}>
                <div class="card-body">
                  <h5 class="card-title">Exam title</h5>
                  <p class="card-text">Provide a brief optional description for the exam</p>
                  <a href="" class="btn btn-primary">Application Page</a>
                </div>
              </div>
              <div class="card card-container" style={{width: 18 + 'rem', padding: 20 + 'px', margin: 10}}>
                <div class="card-body">
                  <h5 class="card-title">Exam title</h5>
                  <p class="card-text">Provide a brief optional description for the exam</p>
                  <a href="" class="btn btn-primary">Application Page</a>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="mx-10 card card-container" style={{width: 18 + 'rem', padding: 20 + 'px', margin: 10}}>
                <div class="card-body">
                  <h5 class="card-title">Exam title</h5>
                  <p class="card-text">Provide a brief optional description for the exam</p>
                  <a href="" class="btn btn-primary">Application Page</a>
                </div>
              </div>
              <div class="card card-container" style={{width: 18 + 'rem', padding: 20 + 'px', margin: 10}}>
                <div class="card-body">
                  <h5 class="card-title">Exam title</h5>
                  <p class="card-text">Provide a brief optional description for the exam</p>
                  <a href="" class="btn btn-primary">Application Page</a>
                </div>
              </div>
              <div class="card card-container" style={{width: 18 + 'rem', padding: 20 + 'px', margin: 10}}>
                <div class="card-body">
                  <h5 class="card-title">Exam title</h5>
                  <p class="card-text">Provide a brief optional description for the exam</p>
                  <a href="" class="btn btn-primary">Application Page</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}