import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {

  let submitAction = () => {
    alert("HELLO WORLD!!!")
  }

  return (
    <div>
      <Head>
        <title>Sign In!</title>
      </Head>

      <main>
        <section class="vh-100" style={{backgroundColor: '#2779e2'}}>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="card card-container text-center" style={{width: 350 + 'px'}}>
                <div class="card-header">
                  <h1>Sign In</h1>
                </div>
                <div class="card-body">
                  <form class="form-signin" onSubmit={submitAction}>
                    <input type="text" id="inputId" class="form-control" placeholder="Identification" required autofocus />
                    <br></br>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                    <br></br>
                    <div class="d-flex justify-content-center">
                      <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
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
                        <button class="btn btn-lg btn-primary btn-block">
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
