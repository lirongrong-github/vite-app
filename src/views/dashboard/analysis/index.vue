<script lang="ts" setup>
  import { ref } from 'vue';
  import AnalysisCard from './components/AnalysisCard.vue';
  const loading = ref<boolean>(true);
  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
<template>
  <section class="p-4">
    <AnalysisCard :loading="loading" class="enter-y" />
  </section>
</template>
