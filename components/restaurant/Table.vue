<script setup lang="ts">
  import restaurants from '@/assets/jsons/data.json';
  
  const { isDarkMode } = useDarkMode();
  const restaurantsDetails = {
    firstCol : [...restaurants].splice(0, 25),
    secondCol : [...restaurants].splice(25, 50),
  }
</script>

<template>
  <div class="table py-5 mb-0">
    <h1 class="mb-4" :class="isDarkMode ? 'text-white' : null">TOP 50: THE RANKING</h1>
    <div class="table-container row g-5">
      <div class="table-col col-12 col-md-6">
        <RestaurantRow :isHeader="true"/>
        <RestaurantRow
        v-for="(restaurant, index) in restaurantsDetails.firstCol"
        :key="restaurant.id"
        :name="restaurant.name"
        :rank="restaurant.rank"
        :index="index"
        />
      </div>
      <div class="table-col col-12 col-md-6">
        <RestaurantRow :isHeader="true"/>
        <RestaurantRow
          v-for="(restaurant, index) in restaurantsDetails.secondCol"
          :key="restaurant.id"
          :name="restaurant.name"
          :rank="restaurant.rank"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

