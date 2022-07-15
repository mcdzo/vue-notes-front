<template>
  <div class="notes-container">
    <SingleNote
      v-for="notes in notes"
      :key="notes.id"
      :title="notes.title"
      :content="notes.content"
      :id="notes.id"
      :onDelete="onDelete"
    />
  </div>
</template>

<script>
import SingleNote from "./SingleNote.vue";

export default {
  name: "NotesContainer",
  props: {
    onDelete: Function,
  },
  computed: {
    notes(){ 
      return this.$store.state.notes
    }
  },
  components: {
    SingleNote,
  },
  created(){
   console.log(this.$store.state.notes)
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notes-container {
  width: 100vw;
  min-height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
</style>
