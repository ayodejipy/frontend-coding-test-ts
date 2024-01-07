import { vi, describe, it, expect } from 'vitest'
import useToasts from '../../composables/useToasts'

describe('useToasts composables testing', () => {
  it('ensures state is updating and functions are called', () => {
    const { toasts, success, error, info } = useToasts()
    expect(toasts.value.length).to.equal(0)

    success('This is a success toast test', {
      title: 'Success',
    })
    error('This is a error toast test', {
      title: 'error',
    })
    info('This is a info toast test', {
      title: 'info',
    })
    expect(toasts.value.length).to.equal(3)
  })

  it('ensures toast is remove from stack', () => {
    const { toasts, dismiss } = useToasts()

    toasts.value.forEach((toast) => {
      dismiss(toast.id)
    })

    expect(toasts.value.length).to.equal(0)
  })
})
