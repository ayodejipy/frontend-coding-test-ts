<template>
  <section class="w-full max-w-7xl mx-auto">
    <div class="mt-10">
      <h1 class="font-extrabold tracking-tight text-4xl leading-10">
        Ready for the challenge?
      </h1>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="artwork in artworks" :key="artwork.id">
        <img
          class="h-auto max-w-full rounded-lg"
          v-bind:src="artwork.thumbnail.lqip"
          alt=""
        />
      </div>
    </div>

    {{ artworks }}
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import useFetch from '../composables/useFetch'

const { isFetching, error, data } = useFetch('artworks')

const artworks = computed<typeof data.value>(() => data.value ?? [])
</script>
