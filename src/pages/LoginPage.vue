<template>
  <div class="login-page">
    <form class="login-form" type="submit">
      <div class="login-input-section">
        <label>Email: </label>
        <input type="text" class="email-input" />
      </div>
      <div class="login-input-section">
        <label>Password: </label>
        <input type="text" class="password-input" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
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

.email-input,
.password-input input:focus {
  outline: none;
}
</style>
