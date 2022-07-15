<template>
  <div class="login-page">
    <form
      class="login-form"
      v-on:submit.prevent="onLogIn"
      type="submit"
    >
      <h2>Log In</h2>
      <div class="login-input-section">
        <label>Email: </label>
        <input type="text" class="email-input" v-model="email" />
      </div>
      <div class="login-input-section">
        <label>Password: </label>
        <input type="password" class="password-input" v-model="password" />
      </div>
      <div class="login-button-section">
        <button>Log In</button>        
      </div>
      <a href="http://localhost:8080/register" class="register-link">Register</a>
    </form>
  </div>
</template>

<script>
import Login from "../service/Login/login.js"
import getAllNotes from "../service/Notes/getAllNotes.js"

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onLogIn() {
      console.log(this.email, this.password);

      if(this.email === "" || this.password === ""){
        alert("Hay campos que debes completar")
      }else{

        Login(this.email, this.password).then(res => {
          if(res.status === 200){
            console.log(res)
           
          const jwt = res.data.token;
          window.sessionStorage.setItem("jwt", jwt);
          getAllNotes
          this.$router.push("/home")
          getAllNotes()
          }else{
            alert("Usuario o contraseña incorrectos.")
          }
        })
      }

    },
  },
};
</script>

<style>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.login-form {
  width: 450px;
  height: 450px;
  background-color: #1f2937;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-input-section {
  width: 100%;
  height: 25%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  padding-left: 25px;
  padding-right: 25px;
}
.email-input,
.password-input {
  width: 100%;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: #40536e;
  background-color: #1f2937;
  color: #ffffff;
  border-style: solid;
  border-radius: 4px;
  box-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);
  text-shadow: 0px 0px 0px rgba(66, 66, 66, 0);
}

.email-input input:focus,
.password-input input:focus {
  outline: none;
}

.login-button-section button {
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  background-color: #01891a;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  margin-top: 25px;
}

.login-button-section button:hover {
  cursor: pointer;
  background-color: #06b025;
}

.register-link{
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
}

</style>
