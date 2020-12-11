<template>
  <base-card>
    <h2 class="h2">Find your coach</h2>
    <h3 class="h3">Select an area of expertise: </h3>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend"
        ><base-badge
          @click="frontActive = !frontActive"
          :type="frontActive ? 'frontend-white' : 'frontend-full'"
          :title="'frontend'"
          class="cursor-pointer"
        ></base-badge
      ></label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter"/>
      <label for="backend"
        ><base-badge
          @click="backActive = !backActive"
          :type="backActive ? 'backend-white' : 'backend-full'"
          :title="'backend'"
          value="backend"
          class="cursor-pointer"
        ></base-badge
      ></label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career"
        ><base-badge
          @click="careerActive = !careerActive"
          :type="careerActive ? 'career-white' : 'career-full'"
          :title="'career'"
          value="career"
          class="cursor-pointer"
        ></base-badge
      ></label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      frontActive: false,
      backActive: false,
      careerActive: false,
      badgeClass: 'frontend-white',
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
};
</script>

<style scoped>
input[type='checkbox'] {
  display: none;
  margin-top: 2rem;
}
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
