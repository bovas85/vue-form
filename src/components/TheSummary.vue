<template>
  <ul class="summary list" v-if="$store.state.forms != null && $store.state.forms.length">
    <li :key="index" v-for="(item, index) in $store.state.forms">
      <p><strong>Name:</strong> {{ item.firstName }} {{ item.surname }}</p>
      <p><strong>Email:</strong> {{ item.email }}</p>
      <p><strong>Query:</strong> {{ item.query }}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'TheSummary'
  }
</script>

<style lang="scss" scoped>
  .summary {
    text-align: left;
    list-style-type: disc;
  }
  p {
    font-size: 1rem;

    strong {
      display: block;
      font-size: inherit;
      font-weight: bold;
    }
  }
</style>
