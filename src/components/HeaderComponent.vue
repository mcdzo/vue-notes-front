<template>
  <div class="header">App de Notas <button class="log-out-link" @click="onLogOut">LogOut</button></div>
</template>
<script>
export default {
  name: "HeaderComponent",
  methods: {
    onClick(){
      console.log("Hello world")
    },
  
    onLogOut(){
      window.sessionStorage.removeItem("jwt")
      this.$router.push("/login")
    }}
};
</script>



<style scoped>
.header {
  background-color: #1f2937;
  color: white;
  font-weight: bold;
  width: 100vw;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 36px;
}


.log-out-link{
  background: none;
  border: none;
  cursor: pointer;
  margin: 0px 25px;
  color: #fff;
}


</style>
