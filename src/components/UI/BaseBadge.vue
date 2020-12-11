<template>
  <span
    :class="type"
    class="text-xs mr-2 my-1 uppercase rounded tracking-wider text-white  py-1 px-2  cursor-default"
    >{{ title }}
    </span >
</template>

<script>
export default {
  props: ['title', 'type']
}
</script>

<style scoped>
.frontend-full {
  background-color: #1D4ED8;
}

.backend-full {
  background-color: #B91C1C;
}
.career-full {
  background-color: #D97706;
}

.frontend-white {
  background-color: transparent;
  color: #1D4ED8;
  border: 1px solid #1D4ED8;
}

.backend-white {
  background-color: transparent;
  color: #B91C1C;
  border: 1px solid #B91C1C;
}
.career-white {
  background-color: transparent;
  color: #D97706;
  border: 1px solid #D97706;
}

</style>