<template>
  <div>
    <HeaderComponent />
    <NewNoteForm v-if="toggleNewNote"/>
    <div class="new-note-section">
      <button
        class="open-form-button"
        v-on:click="newNote"
        v-if="!toggleNewNote"
      >
        Nueva Nota
      </button>
      <button
        class="close-form-button"
        v-on:click="newNote()"
        v-if="toggleNewNote"
      >
        Cerrar Formulario
      </button>
    </div>

    <Notes v-if="notes.length !== 0"/>
    <div class="empty-msg" v-if="notes.length === 0">
      Aun no hay notas por mostrar. Agrega una!
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import NewNoteForm from "../components/NewNoteForm.vue";
import Notes from "../components/Notes.vue";
import getAllNotes from "../service/Notes/getAllNotes.js"

export default {
  name: "HomePage",
  data() {
    return {
      toggleNewNote: false,
    };
  },/*te podes traer las notas del store como prop compudata*/
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  components: {
    HeaderComponent,
    NewNoteForm,
    Notes,
  },

  created() {
    getAllNotes().then(res => {
      this.getNotes(res.data)
      console.log(res.data)
    })
    
  },

  methods: {
    newNote() {
      this.toggleNewNote = !this.toggleNewNote;
    },
   onNewNote() {
      return this.$store.commit("onNewNote");
    },
    getNotes(notes) {      
      return this.$store.commit("getAllNotes", {notes})
    }
  },
};
</script>

<style scoped>
.new-note-section {
  width: 100vw;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.open-form-button {
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

.open-form-button:hover {
  background-color: #06b126;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
}

.close-form-button {
  background-color: #1f2937;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 10px 8px 10px;
  text-decoration: none;
  margin-top: 25px;
}

.close-form-button:hover {
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
}

.empty-msg {
  width: 100vw;
  height: 200px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
}
</style>
