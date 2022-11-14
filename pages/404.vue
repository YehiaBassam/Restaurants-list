<template>
  <div>
    <div class="container text-center mt-5">
      <NuxtLayout name="error">
        <template #header>
          <h1>Page not found</h1>
        </template>

        <template #backRedirect>
          <NuxtLink to="/">Go Back</NuxtLink>
        </template>
      </NuxtLayout>
    </div>
  </div>
</template>
