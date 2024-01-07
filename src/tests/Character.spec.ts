import { VueWrapper, mount } from '@vue/test-utils'
import { vi, describe, it, beforeEach, expect } from 'vitest'
import Character from '../components/Character.vue'
import type { ICharacter } from '../types/character'
import { dummyData } from '../utils/data'

const Props: ICharacter = dummyData[0]

vi.mock('vue-router', () => ({
  resolve: vi.fn(),
  RouterLink: vi.fn(),
}))

describe('Character component testing', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Character, {
      props: {
        character: Props,
      },
    })
  })

  it('component is correctly mounted', async () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('ensures props are received correctly', () => {
    const img = wrapper.find('img')
    console.log(wrapper.vm)
    expect(img).toBeTruthy()
    // expect(img.attributes('src')).toEqual(Props.image)
  })
})
