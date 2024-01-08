<template>
  <section class="w-full max-w-7xl mx-auto space-y-24 pt-44">
    <div class="w-full">
      <h1
        class="font-extrabold tracking-tight text-4xl text-gray-800 leading-10"
      >
        The Wizarding World Catalog: <br />
        Explore Every Enchanting Character in Harry Potter
      </h1>
    </div>

    <div v-if="isFetching" class="w-full">
      <div class="grid grid-cols-6 gap-4 animate-pulse">
        <div
          v-for="n in 6"
          v-bind:key="n"
          class="bg-slate-300 w-full h-64 rounded-xl"
        ></div>
      </div>
    </div>

    <div
      v-else
      class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4"
    >
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
import useToasts from '../composables/useToasts'
import Character from '../components/Character.vue'
// const { success } = useToasts()

// fetches as a get req and parses response to json()
const { isFetching, data } = await useFetch('characters').get().json()

const characters = computed<ICharacter[]>(() => data.value)
</script>
