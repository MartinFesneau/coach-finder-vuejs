<template>
  <span
    :class="type"
    class="text-xs mr-2 my-1 uppercase rounded tracking-wider border text-white  py-1 px-2  cursor-default"
    >{{ title }}
    </span >
</template>

<script>
export default {
  props: ['title', 'type']
}
</script>

<style scoped>
.frontend {
  background-color: #1D4ED8;
}

.backend {
  background-color: #B91C1C;
}
.career {
  background-color: #D97706;
}
</style>