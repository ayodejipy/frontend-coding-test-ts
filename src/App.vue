<template>
  <Suspense>
    <template #fallback> Loading.... </template>
    <div
      class="min-w-full min-h-screen font-sans text-sm antialiased bg-gray-100"
    >
      <router-view />
    </div>
  </Suspense>
</template>

<script setup lang="ts"></script>
