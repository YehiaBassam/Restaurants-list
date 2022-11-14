<script setup>
  import restaurants from "@/assets/jsons/data.json";
  const { isDarkMode } = useDarkMode();

  const route = useRoute();
  const restaurantName = route.params.name;
  const restaurant = restaurants.find((r) => r.name == restaurantName);
</script>

<template>
  <div v-if="restaurant" style="overflow: hidden">
    <NuxtLayout name="footer">
      <div class="row align-items-center g-4" :class="isDarkMode ? 'bg-secondary text-white' : null" style="min-height:87.8vh">
        <div class="col-12 col-md-6">
          <img
            :src="restaurant.imageUrl"
            class="img-fluid"
            :alt="`${restaurant.name}`"
          />
        </div>
        <div class="col-12 col-md-6 p-5">
          <h2 class="mb-4">{{ restaurant.name }}</h2>
          <div class="d-flex">
            <h6 class="me-5">Revenue (in billions)</h6>
            <p>${{ restaurant.revenue }}</p>
          </div>
          <div class="d-flex">
            <h6 class="me-5">Number of Stores</h6>
            <p>{{ restaurant.numberOfStores }}</p>
          </div>
          <p>{{ restaurant.content }}</p>

          <NuxtLink to="/restaurants" class="mt-5 btn btn-primary">
            Back to Restaurants
          </NuxtLink>
        </div>
      </div>
    </NuxtLayout>
  </div>
  
  <div v-else class="text-center mt-5">
    <h3>Restaurant not found</h3>
    <NuxtLink to="/restaurants" class="mt-3 btn btn-primary">
      Back to Restaurants
    </NuxtLink>
  </div>
</template>
