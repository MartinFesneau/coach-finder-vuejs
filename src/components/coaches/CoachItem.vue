<template>
  <li class="bg-white border border-gray-100 my-12 pb-6 w-auto justify-center items-center overflow-hidden md:max-w-sm rounded-lg mx-auto shadow-lg">
    <div class="mt-8">
      <h3 class="text-lg text-center font-semibold">{{ fullName }}</h3>
      <h4 class="text-sm font-bold text-center">${{ rate }}/hour</h4>
      <div class="mt-2 pt-3 flex flex-wrap mx-6 border-t justify-center">
        <base-badge v-for="area in areas" :key="area" :title="area" :type="`${area}-full`"></base-badge>
      </div>
      <div class="action flex justify-center py-2">
        <base-button :mode="'flat'" link :to="coachContactLink">Contact</base-button>
        <base-button link :to="coachDetailsLink">Details</base-button>
      </div>
    </div>
  </li>
  
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return  this.$route.path + '/' + this.id + '/contact'; // /coaches/id/contact
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
}
</script>