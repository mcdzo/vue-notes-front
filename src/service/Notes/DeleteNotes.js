import axios from "axios"

const DeleteNotes = (id) => {
  const jwt = window.sessionStorage.getItem("jwt");
  console.log(id)
  const options = {
    method: "DELETE",
    url: "http://localhost:3333/api/v1/notes/delete",
    headers: {Authorization: `Bearer ${jwt}`},
    data: {id: id}
  };
  console.log(jwt)
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

export default DeleteNotes


