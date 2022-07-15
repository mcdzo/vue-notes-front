<template>
  <div class="login-page">
        <form
      class="login-form"
      v-on:submit.prevent="onRegister"
      type="submit"

    >
    <h2>Register</h2>
    <div class="login-input-section">
        <label>Email: </label>
        <input type="text" class="email-input" v-model="email"/>
      </div>
      <div class="login-input-section">
        <label>Password: </label>
        <input type="password" class="password-input" v-model="password"/>
      </div>
      <div class="login-button-section">
        <button>Register</button>      
      </div>
    <a href="http://localhost:8080/login" class="register-link">Log In</a>
    </form>
  </div>

</template>

<script>
import RegisterPage from "../service/Register/Register.js"

export default {
  name: "RegisterPage",
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    onRegister() {
      console.log(this.email, this.password)
      if(this.email === "" || this.password === "") {
        alert("Hay campos que debes completar")
      }else{
        RegisterPage(this.email, this.password).then(res => {
          if(res.status === 200){ 
          const jwt = res.data.token;
          window.sessionStorage.setItem("jwt", jwt);
          this.$router.push("/login")
          
          }else{
            alert("Usuario o contraseña incorrectos.")
          }
        })
      }
    }
  }
}

</script>

<style></style>
