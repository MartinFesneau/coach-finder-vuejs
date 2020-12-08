<template>
  <header class="bg-gray-300	">
    <nav class="flex justify-between py-4 border-b-1 border-gray-400 block mx-72">
      <h1 class="font-mono font-semibold text-xl font">
        <router-link to="/">Find a coach</router-link>
      </h1>
      <ul class="flex justify-evenly object-right">
        <li
          class="font-semibold text-gray-800 mr-8 "
        >
          <router-link to="/coaches">All coaches</router-link>
        </li>
        <li
          class="font-semibold text-gray-800"
        >
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  a:active,
a:hover,
a.router-link-active {
  border-style: thick;
  border-bottom: 3px solid black;
  color: black;
}
</style>