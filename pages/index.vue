<script setup>
  const { isDarkMode } = useDarkMode();
</script>

<template>
  <Html>
    <Head>
      <Title>Resturants</Title>
      <Meta name="description" content="resturants list application " />
      <Link rel="preload" href="@/public/favicon.ico" as="script" />
    </Head>
  </Html>

  <NuxtLayout name="footer">
    <div :class="isDarkMode ? 'bg-secondary' : 'bg-light'">
      <div class="py-5 text-center" style="height: 84.5vh">
        <h2 class="mb-3" :class="isDarkMode ? 'text-white' : null">Welcome To Restaurants List Application</h2>
        <NuxtLink to="/restaurants" :class="isDarkMode ? 'text-white' : null">Go To Restaurants</NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>
