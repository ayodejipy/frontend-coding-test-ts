<template>
  <section class="w-full max-w-7xl mx-auto space-y-24 pt-44">
    <div class="w-full">
      <h1
        class="font-extrabold tracking-tight text-4xl text-gray-800 leading-10"
      >
        Harry Potter
      </h1>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
      <div v-for="character in characters" v-bind:key="character.id">
        <Character v-bind:character="character" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ICharacter } from '../types/character'
import useFetch from '../composables/useFetch'
import Character from '../components/Character.vue'

const { isFetching, error, data } = await useFetch('characters')

const characters = computed<ICharacter[]>(() => JSON.parse(data.value as string))
</script>
../types/artwork
