<template>
  <ul class="summary list" v-if="$store.state.forms != null && $store.state.forms.length">
    <li :key="index" v-for="(item, index) in $store.state.forms">
      <p><strong>Name:</strong> {{ item.firstName }} {{ item.surname }}</p>
      <p><strong>Email:</strong> {{ item.email }}</p>
      <p><strong>Query:</strong></p>
      <p>{{ item.query.length ? item.query : 'None' }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheSummary"
};
</script>

<style lang="scss" scoped>
.summary {
  padding: 0;
  text-align: left;
  list-style-type: disc;

  li {
    padding: 10px;
    overflow: auto;
    background-color: rgba(242, 242, 242, 0.1);
    border: none;
    box-shadow: inset 0 0 5px rgba(10, 10, 10, 0.1);
    height: 100%;
    border-radius: 4px;

    &:first-child {
      margin-bottom: 32px;
    }

    &:not(:first-child),
    &:not(:last-child) {
      margin: 32px 0;
    }
  }
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
