import { createFetch } from '@vueuse/core'

export default createFetch({
  baseUrl: 'https://api.artic.edu/api/v1/',
  options: {
    async beforeFetch({ options }) {
      const myToken = 'ACCESS_CODE'
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${myToken}`,
      }

      return { options }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})