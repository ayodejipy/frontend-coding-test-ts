<template>
  <router-link v-bind:to="`/character/${character.id}`">
    <img
      v-if="character.image"
      class="h-full w-full rounded-xl object-cover cursor-pointer"
      v-bind:src="character.image"
      v-bind:alt="character.actor"
      data-testid="actor-image"
    />
    <img
      v-else
      class="h-full w-full rounded-xl object-cover cursor-pointer"
      src="https://friendly-goodall-5241cd.netlify.app/static/media/no_image.22d2aa4d.jpg"
      v-bind:alt="character.actor"
    />
  </router-link>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import type { ICharacter } from '../types/character'

defineProps<{
  character: ICharacter
}>()
</script>
