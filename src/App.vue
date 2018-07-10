<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <img width="300" height="100" src="/images/cb-logo.svg" title="ClearBank" alt="ClearBank Logo">
        <h1 class="is-size-2">Vue Form with Validation</h1>
        <the-summary />
        <the-form />
        <button v-if="$store.state.sent" class="button is-primary" @click="addNewEntry">Add New</button>
      </div>
    </section>
  </div>
</template>

<script>
import TheSummary from "./components/TheSummary";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    /**
     * TheForm can be lazyloaded as a dynamic import,
     * while The Summary is needed on load
     */
    TheForm: () => import("./components/TheForm"),
    TheSummary
  },
  methods: {
    addNewEntry() {
      /**
       * Call the store to create a new form
       */
      this.$store.dispatch("addNewEntry");
    }
  }
};
</script>
<style lang="scss">
.button {
  &.is-link,
  &.is-primary {
    background-color: #0d326d;
    transition: all 0.6s ease-in-out;

    i {
      line-height: 1;
      color: #69b0e1;
      padding-left: 5px;
      transition: all 0.6s ease-in-out;
    }

    &:hover {
      background-color: #69b0e1;

      i {
        color: white;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:800");

h1 {
  font-family: "Raleyway", sans-serif;
  color: #0d326e;
  margin-bottom: 32px;
  font-weight: bold;
}

img {
  width: 100%;
  max-width: 300px;
  display: block;
  max-height: 100px;
  object-fit: cover;
  margin: 32px auto 64px;
}
</style>
