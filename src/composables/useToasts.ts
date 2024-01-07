import { ref } from 'vue'
import { nanoid } from 'nanoid'
import toasts from '../store/store'

interface Options {
  type?: 'success' | 'error' | 'info' | 'warning'
  title?: string
  dismissiable?: boolean
  timeout?: number
}
export interface Toast extends Options {
  message: string
  id: string
}

export default function useToasts() {
  function dismiss(idOrToast: string | Toast) {
    const id = typeof idOrToast === 'string' ? idOrToast : idOrToast.id
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }

  function Toast(message: string, options: Options) {
    const id = nanoid()
    const defaults: Partial<Options> = {
      type: 'info',
      dismissiable: true,
      timeout: 5000,
    }
    toasts.value.push({ id, ...defaults, message, ...options })

    const timeout =
      options.timeout === undefined ? defaults.timeout : options.timeout
    if (timeout) {
      setTimeout(() => dismiss(id), timeout)
    }
  }

  function success(message: string, options: Options = {}) {
    Toast(message, { ...options, type: 'success' })
  }

  function error(message: string, options: Options = {}) {
    Toast(message, { ...options, type: 'error' })
  }

  function info(message: string, options: Options = {}) {
    Toast(message, { ...options, type: 'info' })
  }

  function warning(message: string, options: Options = {}) {
    Toast(message, { ...options, type: 'warning' })
  }

  return {
    success,
    info,
    warning,
    error,
    toasts,
    dismiss,
  }
}
