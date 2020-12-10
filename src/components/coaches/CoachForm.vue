<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label class="label" for="firstname">First name</label>
      <input class="input" type="text" id="firstname" v-model.trim="firstName">
    </div>
    <div class="form-control">
      <label class="label" for="lastname">Last name</label>
      <input class="input" type="text" id="lastname" v-model.trim="lastName">
    </div>
    <div class="form-control">
      <label class="label" for="descriptio">Description</label>
      <textarea class="text-area" row="5" id="description" v-model.trim="description"/>
    </div>
    <div class="form-control">
      <label class="label" for="rate">Hourly rate</label>
      <input class="input" type="number" id="rate" v-model.number="rate">
    </div>
    <div class="form-control">
      <h3 class="h3 py-2">Areas of expertise:</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas">
        <label for="frontend">Frontend development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas">
        <label for="backend">Backend development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas">
        <label for="career">Career advisory</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: []
    }
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas
      };
      console.log(formData);
    }
  },
}
</script>

<style scoped>
input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
  color: red;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>