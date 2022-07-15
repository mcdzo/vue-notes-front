<template>
  <div class="single-note">
    <div class="delete-section">
      <button class="delete-button" v-on:click="onDelete(id)">X</button>
    </div>
    <div class="note-title">{{ title }}</div>
    <div class="note-content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "SingleNote",

  props: {
    title: String,
    content: String,
    id: Number,
  },
  methods: {
    onDelete(){
      const id = this.id
      return this.$store.dispatch("deleteNoteAction", {id})
    },
  }};
</script>

<style scoped>
.single-note {
  width: 500px;
  height: 150px;
  background-color: rgb(216, 200, 74);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
}

.note-title {
  width: 100%;
  height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.note-content {
  width: 100%;
  height: 90%;
  margin-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
}

.delete-section {
  width: 100%;
  height: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.delete-button {
  background: none;
  border: none;
  font-weight: bolder;
}
.delete-button:hover {
  cursor: pointer;
}
</style>
