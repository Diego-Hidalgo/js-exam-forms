const LOGIN_PATH = '/api/login'
const CURRENT_PATH = 'pages/DATA/current.json'

let isLogged = async() => {
  let res = await fetch(LOGIN_PATH)
  let js = await res.json()
  const isEmpty = Object.keys(js).length === 0
  if(!isEmpty) {
    changeRoute(js[0])
  }
}

let changeRoute = async(user) => {
  window.location.href = '/' + user.role + '/' + user.id + '/'
  await fetch(LOGIN_PATH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify({
      id: user.id,
      name: user.firstName + ' ' + user.lastName,
      role: user.role
    })
  })
}

let signOut = async() => {
  let res = await fetch(LOGIN_PATH)
  console.log(res)
  let js = await res.json()
  console.log(js)
}

let moveToUserHome = async() => {
  let res = await fetch(LOGIN_PATH)
  let js = await res.json()
  changeRoute(js[0])
}//End getCurrentUser

export {isLogged, changeRoute, moveToUserHome,signOut}