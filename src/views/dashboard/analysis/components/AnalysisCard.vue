<script lang="ts">
  import { defineComponent } from 'vue';
  import { Card, Tag } from 'ant-design-vue';
  export default defineComponent({
    components: { Card, Tag },
  });
</script>
<script lang="ts" setup>
  import { analysisCardList } from '../data';
  import { CountTo } from '/@/components/CountTo';
  defineProps({
    loading: {
      type: Boolean,
    },
  });
</script>
<template>
  <section class="md:flex">
    <template v-for="(item, index) in analysisCardList" :key="item.title">
      <Card
        :loading="loading"
        size="small"
        class="md:w-1/4 w-full !md:mt-0 !mt-4"
        :class="[index + 1 < 4 && '!md:mr-4']"
        :title="item.title"
      >
        <template #extra>
          <Tag :color="item.color">{{ item.action }}</Tag>
        </template>

        <div class="py-4 px-4 flex justify-between">
          <!-- <CountTo prefix="$" :startVal="1" :endVal="item.value" class="text-2xl" /> -->
          <CountTo prefix="$" :startVal="1" :endVal="item.value" class="text-2xl" />
          <!-- <span>left</span> -->
          <span>right</span>
          <!-- <Icon :icon="item.icon" :size="40" /> -->
        </div>

        <div class="p-2 px-4 flex justify-between">
          <span>总{{ item.title }}</span>
          <CountTo prefix="$" :startVal="1" :endVal="item.total" />
        </div>
      </Card>
    </template>
  </section>
</template>
