<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-control pt-4">
        <label class="label" for="email">Your email</label>
        <input type="email" id="email" class="input" v-model.trim="email" />
      </div>
      <div class="form-controm">
        <label class="label" for="message">Your message</label>
        <textarea
          id="message"
          rows="5"
          class="text-area"
          v-model.trim="message"
        ></textarea>
      </div>
      <p class="errors" v-if="!formIsValid">
        Please enter a valid email or a non empty message
      </p>
      <div class="actions">
        <base-button>Send message</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email == '' || !this.email.includes('@') || this.message == '') {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id
      });
      this.$router.replace('/coaches');
    }
  }
};
</script>

<style scoped>
.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
