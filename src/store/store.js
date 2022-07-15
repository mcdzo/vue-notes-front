import Vue from "vue";
import Vuex from "vuex";

import DeleteNotes from "../service/Notes/DeleteNotes"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    notes: [],
  },
  mutations: {
    onNewNote: (state, {title, content}) => {
      if (title === "" && content === "") {
        alert("No se puede agregar una nota vacía");
      } else {
        const id = parseInt(Math.random() * (1000 - 1) + 1);
        const newNote = {
          id: id,
          title: title,
          content: content,
        };
        state.notes.push(newNote);
      }
    },

    deleteNote: (state, {id}) => {
      const newNotes = state.notes.filter((note) => note.id !== id);

      DeleteNotes(id).then(res => {
        return console.log(res)
      })

      state.notes = newNotes;
      return state.notes;
    },

    getAllNotes: (state, {notes}) => {
      state.notes = notes
      return state.notes
    }
  },

  actions: {
    newNoteAction: (context, {title, content}) => {
      context.commit("onNewNote", {title, content})
    },
    deleteNoteAction: (context, {id}) => {
      context.commit("deleteNote", {id})
    },
    getAllNotes: (context, {notes}) => {
      context.commit("getAllNotes", {notes})
    }
  },

});
