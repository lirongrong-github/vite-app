<script lang="ts" setup>
  import PageHeader from './PageHeader.vue';
  // import PageFooter from './PageFooter.vue';

  defineProps({
    title: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <PageHeader :title="title" />
  <section class="overflow-hidden">
    <slot />
  </section>
  <!-- <PageFooter> 123 </PageFooter> -->
</template>
