<template>
  <div
    class="fixed bottom-0 z-10 w-full p-2 right-2 sm:p-0 sm:w-auto sm:bottom-5"
  >
    <TransitionGroup name="list" tag="ul">
      <div
        v-for="toast in toasts"
        v-bind:key="toast.id"
        class="mb-4 border-t-[1px] shadow-sm rounded-lg toast bg-gray-200 py-2 !pr-0"
        v-bind:class="classes[toast.type as string]"
        data-testid="toast"
      >
        <div class="flex justify-between sm:w-80">
          <div class="flex items-center">
            <div class="mx-4">
              <div v-if="toast.title" class="font-bold">{{ toast.title }}</div>
              <div class="">{{ toast.message }}</div>
            </div>
          </div>
          <button
            v-if="toast.dismissiable"
            class="p-1 transition rounded hover:bg-white"
            v-on:click="dismiss(toast)"
          >
            x
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import useToasts from '../composables/useToasts'

const { toasts, dismiss } = useToasts()

const classes = reactive<{ [key: string]: string }>({
  success: 'border-t-green-500',
  error: 'border-t-red-600',
  info: 'border-t-blue-600',
  warning: 'border-t-yellow-600',
})
</script>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.6s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(60px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(60px) translateY(-100%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
