import axios from "axios"

const Register = (email, password) => {

  console.log("registeeerrr")

  const url = "http://localhost:3333/api/v1/register"

  return axios.post(url, {
    email: email,
    password: password
  }).then(res => {
    return res
  })

}



export default Register
