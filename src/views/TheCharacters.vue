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
import useToasts from '../composables/useToasts'
import Character from '../components/Character.vue'

const { success } = useToasts()

// fetches as a get req and parses response to json()
const { error, data } = await useFetch('characters1').get().json()

console.log(error)

const characters = computed<ICharacter[]>(() => data.value)
</script>
