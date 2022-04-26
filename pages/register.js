import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

export default function Register() {

  let submitAction = () => {
    alert("Hello World")
  }

  return (
    <div>
      <Head>
        <title>Register!</title>
      </Head>
      <main>
        <section class="vh-100" style={{backgroundColor: '#2779e2'}}>
          <div class="container h-100">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="card card-container text-center" style={{width: 400 + 'px', padding: 8 + 'px'}}>
                <div class="card-header">
                  <h1>Register</h1>
                </div>
                <div class="card-body">
                  <form onSubmit={submitAction}>
                    <div class="d-flex flex-column justify-content-center align-items-center pt-4 pb-3">
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <div class="col-md-7 ps-3 d-flex justify-content-start">
                          <h6 class="mb-0">First Name:</h6>
                        </div>
                        <div>
                          <input type="text" class="form-control form-control-lg"></input>
                        </div>
                      </div>
                      <br></br>
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <div class="col-md-7 ps-3 d-flex justify-content-start">
                          <h6 class="mb-0">Last Name:</h6>
                        </div>
                        <div>
                          <input type="text" class="form-control form-control-lg"></input>
                        </div>
                      </div>
                      <br></br>
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <div class="col-md-7 ps-3 d-flex justify-content-start">
                          <h6 class="mb-0">Identification:</h6>
                        </div>
                        <div>
                          <input type="text" class="form-control form-control-lg"></input>
                        </div>
                      </div>
                      <br></br>
                      <div class="d-flex form-floating justify-content-center align-items-center">
                        <select id="role" class="form-select" style={{width: 345 + 'px'}}>
                          <option value={'1'}>Teacher</option>
                          <option value={'2'}>Student</option>
                        </select>
                        <label for="role">Choose Role:</label>
                      </div>
                      <br></br>
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <div class="col-md-7 ps-3 d-flex justify-content-start">
                          <h6 class="mb-0">Password:</h6>
                        </div>
                        <div>
                          <input type="password" class="form-control form-control-lg"></input>
                        </div>
                      </div>
                      <br></br>
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <div class="col-md-7 ps-3 d-flex justify-content-start">
                          <h6 class="mb-0">Confirm Password:</h6>
                        </div>
                        <div>
                          <input type="password" class="form-control form-control-lg"></input>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button type="submit" class="btn btn-lg btn-primary btn-block" style={{backgroundColor: '#2779e2'}}>
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}