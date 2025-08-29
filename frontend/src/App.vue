<script setup>
import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore();

onMounted(() => {
  console.log('App mounted');

});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <router-view />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>