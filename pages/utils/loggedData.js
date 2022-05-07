const PATH = "/api/login"

let currentData = async () => {
    let res = await fetch(PATH)
    let data = await res.json()
    return data
}

export { currentData }