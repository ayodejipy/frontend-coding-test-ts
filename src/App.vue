<template>
  <div
    class="min-w-full min-h-screen font-sans text-sm antialiased bg-gray-100"
  >
    <Suspense>
      <template #fallback> Loading.... </template>
      <router-view />
    </Suspense>
  </div>
  <AppToast />
</template>

<script setup lang="ts">
import AppToast from './components/AppToast.vue'
</script>
