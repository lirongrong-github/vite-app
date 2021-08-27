<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import HelloWorld from './components/HelloWorld';
  console.log(HelloWorld);
  const prefixCls = 'ls';
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld /> -->
  <figure class="bg-gray-100 rounded-xl p-8">
    <img
      class="w-32 h-32 rounded-full mx-auto"
      src="https://www.tailwindcss.cn/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
      alt=""
      width="384"
      height="512"
    />
    <div class="pt-6 space-y-4">
      <blockquote>
        <p class="text-lg bg-red-700">
          “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to
          customize, adapts to any design, and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption>
        <div> Sarah Dayan </div>
        <div> Staff Engineer, Algolia </div>
      </figcaption>
    </div>
  </figure>
  <section :class="`${prefixCls}-dark-switch`">
    <section :class="`${prefixCls}-dark-switch__c`"></section>
  </section>
</template>

<style lang="less">
  @namespace: ls;
  @prefix-cls: ~'@{namespace}-dark-switch';
  .@{prefix-cls} {
    width: 500px;
    height: 500px;
    background: #000;
    &__c {
      width: 300px;
      height: 300px;
      background: red;
    }
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
