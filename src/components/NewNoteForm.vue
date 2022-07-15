<template>
  <section class="form-section">
    <form class="form" v-on:submit.prevent="onNewNote">
      <div class="input-section">
        <label>Titulo de la nota: </label>
        <input type="text" v-model="title" />
      </div>
      <div class="input-section">
        <label>Contenido de la nota: </label>
        <input type="text" v-model="content" />
      </div>
      <div class="button-section">
        <button>Agregar Nota</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "NewNoteForm",
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods:{
    onNewNote(){
      const title = this.title
      const content = this.content

      console.log("desde form: ", title, content)
      return this.$store.dispatch("newNoteAction", {title, content})
    }
  }
};
</script>

<style>
.form-section {
  width: 100vw;
  height: 360px;
  background-color: #1f2937;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #ffffff;
}

.form {
  width: 40%;
  height: 100%;
  background-color: #1f2937;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-section {
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
.input-section input {
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

.input-section input:focus {
  outline: none;
}
.button-section {
  width: 100%;
  height: 25%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
}

.button-section button {
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  background-color: #01891a;
  padding: 8px 10px 8px 10px;
  text-decoration: none;
  margin-top: 25px;
}

.button-section button:hover {
  background-color: #06b126;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
}
</style>
