import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

export default function Register() {

  const submitAction = async (e) => {
    
    const passw = document.getElementById('password').value
    const confirm = document.getElementById('confirm').value

    if(passw != confirm) {
      e.preventDefault()
      alert('The passwords do not match')
      return
    }

    const fName = document.getElementById('firstName').value
    const lName = document.getElementById('lastName').value
    const identification = document.getElementById('identification').value
    const type = document.getElementById('role').value

    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: identification,
        password: passw,
        firstName: fName,
        lastName: lName,
        role: type,
      })
    }
    let resGet = await fetch('/api/users', settings)
    let display = await resGet.json()
    alert(display.msg)
  }

  return (
    <div>
      <Head>
        <title>Register!</title>
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
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="card card-container text-center" style={{width: 400 + 'px'}}>
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
                          <input type="text" id="firstName" class="form-control form-control-lg border border-dark" required />
                        </div>
                      </div>
                      <br></br>
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <div class="col-md-7 ps-3 d-flex justify-content-start">
                          <h6 class="mb-0">Last Name:</h6>
                        </div>
                        <div>
                          <input type="text" id="lastName" class="form-control form-control-lg border border-dark" required />
                        </div>
                      </div>
                      <br></br>
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <div class="col-md-7 ps-3 d-flex justify-content-start">
                          <h6 class="mb-0">Identification:</h6>
                        </div>
                        <div>
                          <input type="text" id="identification" class="form-control form-control-lg border border-dark" required />
                        </div>
                      </div>
                      <br></br>
                      <div class="d-flex form-floating justify-content-center align-items-center">
                        <select id="role" class="form-select border border-dark" style={{width: 345 + 'px'}}>
                          <option value={'teacher'}>Teacher</option>
                          <option value={'student'}>Student</option>
                        </select>
                        <label for="role">Choose Role:</label>
                      </div>
                      <br></br>
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <div class="col-md-7 ps-3 d-flex justify-content-start">
                          <h6 class="mb-0">Password:</h6>
                        </div>
                        <div>
                          <input type="password" id="password" class="form-control form-control-lg border border-dark" required />
                        </div>
                      </div>
                      <br></br>
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <div class="col-md-7 ps-3 d-flex justify-content-start">
                          <h6 class="mb-0">Confirm Password:</h6>
                        </div>
                        <div>
                          <input type="password" id="confirm" class="form-control form-control-lg border border-dark" minLength="7" required />
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