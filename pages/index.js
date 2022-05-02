import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import { isLogged, changeRoute } from './utils/validateLogged'

const USERS_PATH = '/api/users'

let submitAction = async () => {
  const inId = document.getElementById('inputId').value
  const inPassword = document.getElementById('inputPassword').value
  let res = await fetch(USERS_PATH)
  let js = await res.json()
  const resGet = js.find(x => (x.id == inId && x.password == inPassword))
  if (resGet != null) {
    changeRoute(resGet)
  } else {
    alert("Not found")
  }
}

export default function Home() {
  isLogged()
  return (
    <div>
      <Head>
        <title>Sign In!</title>
      </Head>

      <main>
        <section>
          <nav class="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
            <a class="navbar-brand" href="/">
              <h5>js-exam-forms</h5>
            </a>
          </nav>
        </section>
        <section class="vh-100" style={{backgroundColor: '#2779e2'}}>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="card card-container text-center" style={{width: 400 + 'px', padding: 30 + 'px'}}>
                <div class="card-header">
                  <h1>Sign In</h1>
                </div>
                <div class="card-body">
                  <form>
                    <input type="text" id="inputId" class="form-control form-control-lg border border-dark" placeholder="Identification" required autoFocus/>
                    <br></br>
                    <input type="password" id="inputPassword" class="form-control form-control-lg border border-dark" placeholder="Password" required />
                    <br></br>
                    <div class="d-flex justify-content-center">
                      <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" onMouseDown={submitAction} style={{backgroundColor: '#2779e2'}}>
                        Sign in
                      </button>
                    </div>
                  </form>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <a href="/" class="forgot-password">
                      Forgot the password?
                    </a>
                  </div>
                  <br></br>
                  <div class="d-flex flex-column">
                    <div class="d-flex flex-row justify-content-center">
                      <h6>Don't have an account yet?</h6>
                    </div>
                    <div class="d-flex flex-row justify-content-center">
                      <Link href="/register" passHref>
                        <button class="btn btn-lg btn-primary btn-block" style={{backgroundColor: '#2779e2'}}>
                          Register
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
