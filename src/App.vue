<template>
  <div id="app">
    <section class="section ">
      <div class="container">
        <h1 class="is-size-2 has-text-centered">Vue Form with Validation</h1>
        <the-summary />
        <the-form />
        <button v-if="$store.state.sent" class="button is-primary" @click="addNewEntry">Add New</button>
      </div>
    </section>
  </div>
</template>

<script>
  import TheSummary from './components/TheSummary'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      /**
       * TheForm can be lazyloaded as a dynamic import,
       * while The Summary is needed on load
       */
      TheForm: () => import('./components/TheForm'),
      TheSummary
    },
    methods: {
      addNewEntry() {
        /**
         * Call the store to create a new form
         */
        this.$store.dispatch('addNewEntry')
      }
    }
  }
</script>

<style>
</style>
