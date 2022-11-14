<script setup>
  const { isDarkMode ,toggleDarkMode } = useDarkMode();
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
        <NuxtLink class="navbar-brand" to="/">Restaurant</NuxtLink>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <NuxtLink class="nav-link" aria-current="page" to="/">Home</NuxtLink>
              </li>
              <li class="nav-item">
                  <NuxtLink class="nav-link" to="/restaurants">restaurants</NuxtLink>
              </li>
              <li class="nav-item">
                <div class="form-check form-switch mt-2 ms-5" >
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    style="cursor:pointer" 
                    v-model="isDarkMode" 
                    @click="toggleDarkMode" 
                    checked
                  >
                </div>
              </li>
            </ul>
        </div>
        </div>
    </nav>
  </div>
</template>

<style scoped>
a.router-link-active {
    color: #eeeeeee6;
}
</style>
