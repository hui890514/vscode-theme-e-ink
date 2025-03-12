<template>
  <div id="app">
    <!-- Binding and Events -->
    <h1>{{ title }}</h1>
    <button @click="increment">Click Me</button>
    <p v-if="count > 0">Count: {{ count }}</p>
    <p v-else>No clicks yet</p>

    <!-- Loops -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>

    <!-- Component Usage -->
    <ChildComponent :message="title" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const title = ref('Vue Syntax Test')
const count = ref(0)
const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
])

const increment = () => {
  count.value++
}
</script>

<style scoped>
/* Scoped styles */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
button:hover {
  background-color: #369f7f;
}
</style>
