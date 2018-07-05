import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Root state object. 
 * Each Vuex instance is just a single state tree.
 */
const state = {
  sent: false,
  forms: []
}

const mutations = {
  formSent(state) {
    state.sent = true
  },
  sendForm(state, form) {
    state.forms.push(form)
  },
  addNewEntry(state) {
    state.sent = false
  }
}

/**
 * a ctions are functions that cause side effects and 
 * can involve asynchronous  operations. 
 */
const actions = {
  sendForm: ({ commit }, form) => {
    /**
     * Commit the formData to state and signal the app that the form was sent
     */
    commit('sendForm', form)
    commit('formSent')
  },
  /**
   * Add a new form entry. 
   * The form should be then reset to empty.
   */
  addNewEntry: ({ commit }) => commit('addNewEntry')
}

/**
 * A Vuex instance is created by combining the state, 
 * mutations, actions, and getters.
 */
export default new Vuex.Store({
  state,
  actions,
  mutations
})
