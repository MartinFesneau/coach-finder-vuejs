<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  background-color: #10b981;
  border: 1px solid #10b981;
  color: white;
  cursor: pointer;
  border-radius: 16px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  border-color: #059669;
  background-color: #059669;
}

.flat {
  background-color: transparent;
  color: #10b981;
  border: 1px solid #10b981;
}

.outline {
  background-color: red;
  border-color: #270041;
  color: red;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #D1FAE5;
  }
</style>
