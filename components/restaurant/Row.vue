<script setup lang="ts">
  interface RowProps {
    name?: string,
    index?: number,
    rank?: number,
    isHeader?: boolean,
  }
  const props = defineProps <RowProps>();
  const { isDarkMode } = useDarkMode();

  function chooseBgColor(index: number){
    let className = '';
    if (isDarkMode.value){
      index % 2 === 0 ? className ='even-dark' : className = 'odd-dark';
    } else {
      index % 2 === 0 ? className ='even-light' : className = 'odd-light';
    }
    return className;
  }
</script>

<template>
    <div v-if="isHeader" class="header">
      <h4 class="me-4">Rank</h4>
      <h4>Restaurant</h4>
    </div>
    <div v-else class="d-flex ps-4" :class="chooseBgColor(index)">
      <b class="rank me-5" :class="isDarkMode ? 'text-white' : null">{{ rank }}</b>
      <NuxtLink :to="`/restaurants/${name}`" class="link">{{ name }}</NuxtLink>
    </div>
  </template>
  
  <style scoped>
  .row {
    border-top: 1px solid rgba(128, 128, 128, 0.336);
    display: flex;
    align-items: center;
  }
  
  .header {
    display: flex;
    color: rgb(10, 31, 148);
  }
  .rank {
    color: black;
  }
  .link {
    text-decoration: none;
    color: rgb(228, 157, 27);
    width: auto;
    font-weight: 500;
    font-size: 18px;
  }

  .even-light {
    background: rgb(224, 224, 224);
  }
  .even-dark {
    background: #212529;
  }
  .odd-dark {
    background: #374d60;
  }
  </style>