import { VueWrapper, mount } from '@vue/test-utils'
import { vi, describe, it, beforeEach, expect } from 'vitest'
import AppToast from '../components/AppToast.vue'

const Props = {}

describe('AppToast component testing', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(AppToast)
  })

  it('component is correctly mounted', async () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('ensures props are received correctly', () => {
    const img = wrapper.find('img')
    console.log('toast: ', wrapper.vm)
    expect(img).toBeTruthy()
    // expect(img.attributes('src')).toEqual(Props.image)
  })
})
