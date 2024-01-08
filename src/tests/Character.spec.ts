import { VueWrapper, mount, RouterLinkStub } from '@vue/test-utils'
import { vi, describe, it, beforeEach, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../router'
import Character from '../components/Character.vue'
import type { ICharacter } from '../types/character'
import { dummyData } from '../utils/data'

const Props: ICharacter = dummyData[0]

// vue-router mock didn't work, had to test with the real router plugin
const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('Character component testing', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Character, {
      props: {
        character: Props,
      },
      global: {
        plugins: [router],
      },
    })
  })

  it('component is correctly mounted', async () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('has image with correct source', async () => {
    const routerLinkComp = wrapper.find('a')

    const Image = routerLinkComp.find('img')

    expect(Image.attributes('src')).toContain(Props.image)
  })

  it('has image with no image source', async () => {
    const wrapper2 = mount(Character, {
      props: {
        character: { ...Props, image: null as unknown as string },
      },
      global: {
        plugins: [router],
      },
    })

    const routerLinkComp = wrapper2.find('a')
    const Image = routerLinkComp.find('img')

    expect(Image.attributes('src')).toContain(
      'https://friendly-goodall-5241cd.netlify.app/static/media/no_image.22d2aa4d.jpg',
    )
  })
})
