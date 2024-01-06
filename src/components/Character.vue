<template>
  <router-link v-bind:to="`/character/${character.id}`">
    <img
      class="h-full w-full rounded-xl object-cover cursor-pointer"
      v-bind:src="character.image"
      v-bind:alt="character.actor"
    />
  </router-link>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import type { ICharacter } from '../types/character'

const props = defineProps<{
  character: ICharacter
}>()
</script>
