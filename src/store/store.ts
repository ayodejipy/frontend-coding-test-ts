import { ref } from 'vue'
import type { Toast } from '../composables/useToasts'

const toasts = ref<Toast[]>([])

export default toasts
