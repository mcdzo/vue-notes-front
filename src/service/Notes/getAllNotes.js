import axios from "axios"

const getAllNotes = () => {
  const jwt = window.sessionStorage.getItem("jwt");

  const options = {
    method: "GET",
    url: "http://localhost:3333/api/v1/notes",
    headers: {Authorization: `Bearer ${jwt}`},
  };
  return axios
    .request(options)
    .then((res) => {

      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    })
}
export default getAllNotes 
