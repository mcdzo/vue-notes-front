import axios from "axios"


const Login = (email, password) => {

  console.log(email, password)
  const url = "http://localhost:3333/api/v1/login"

  return axios.post(url, {
    email: email,
    password: password
  }).then(res => {
    return res
  })
}


export default Login
