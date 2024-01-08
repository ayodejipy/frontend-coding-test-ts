import { createFetch } from '@vueuse/core'
import useToasts from './useToasts'

const { success, error } = useToasts()

// TODO: Setup error/success messages local to each component request

export default createFetch({
  baseUrl: 'https://hp-api.onrender.com/api/',
  options: {
    async beforeFetch({ options }) {
      //   const myToken = 'ACCESS_CODE'
      //   options.headers = {
      //     ...options.headers,
      //     Authorization: `Bearer ${myToken}`,
      //   }

      return { options }
    },
    afterFetch(ctx) {
      if (ctx.response.ok && ctx.data) {
        success('Data fetched successfully...', {
          title: 'Request successful',
        })
      }
      return ctx
    },
    onFetchError(ctx) {
      ctx.error = new Error('Something went wrong, please try again.')
      error(ctx.error.message, {
        title: 'Request failed',
      })
      return ctx
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})
