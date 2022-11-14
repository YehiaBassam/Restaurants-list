<script setup>
  const { isDarkMode } = useDarkMode();
</script>

<template>
  <NuxtLayout name="footer">
    <div :class="isDarkMode ? 'bg-secondary' : 'bg-light'">
      <div class="container">
        <RestaurantTable />
      </div>
    </div>
  </NuxtLayout>
</template>
