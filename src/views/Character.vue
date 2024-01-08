<template>
  <section class="w-full max-w-full">
    <div
      v-if="character && !isFetching"
      class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14"
    >
      <div
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div
          class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
        >
          <h1
            class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
          >
            <span class="text-2xl block">Accio 🪄 </span>
            {{ character.name }}
          </h1>
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mb-4">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Other names
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                <span
                  v-for="alias in character.alternate_names"
                  v-bind:key="alias"
                  class="pr-1.5"
                >
                  {{ alias }}
                </span>
              </dd>
            </div>

            <div class="px-4 sm:px-0">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                Character Information
              </h3>
              <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div class="mt-6 border-t border-gray-100">
              <dl class="divide-y divide-gray-100">
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Actor name
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                  >
                    {{ character.actor }}
                  </dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Date of Birth
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                  >
                    {{ character.dateOfBirth }}
                  </dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Gender
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                  >
                    {{ character.gender }}
                  </dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Species
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                  >
                    {{ character.species }}
                  </dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    House
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                  >
                    {{ character.house }}
                  </dd>
                </div>
                <div class="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Ancestry
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                  >
                    {{ character.ancestry }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <img
            v-bind:src="character.image"
            alt=""
            class="mt-10 h-60 w-60 rounded-full object-cover sm:mt-16 lg:mt-0 xl:row-span-2 xl:row-end-2"
          />
        </div>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"
      />
    </div>

    <div v-else>
      <div class="flex items-start gap-8 animate-pulse">
        <div class="bg-slate-300 w-full h-64 rounded-xl"></div>
        <div class="bg-slate-300 w-48 h-48 rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ICharacter } from '../types/character'
import useFetch from '../composables/useFetch'

const props = defineProps<{
  id: string
}>()

const { isFetching, error, data } = await useFetch(`character/${props.id}`)

const character = computed<ICharacter>(
  () => JSON.parse(data.value as string)[0],
)
</script>
