// import { VueWrapper, mount } from '@vue/test-utils'
// import {
//   vi,
//   describe,
//   it,
//   expect,
//   beforeEach,
//   afterEach,
//   SpyInstance,
// } from 'vitest'
// import { setupServer } from 'msw/node'
// import { HttpResponse, graphql, http } from 'msw'
// import useFetch from '../../composables/useFetch'
// import { dummyData } from '../../utils/data'
// import { nextTick } from 'vue'

// const mockedCharacters = dummyData

// // vi.mock('./../composables/useFetch.ts', async () => ({
// //   mockUseFetch: () => JSON.parse(mockedCharacters as unknown as string),
// // }))

// const jsonMessage = { hello: 'world' }
// const jsonUrl = `https://example.com?json=${encodeURI(
//   JSON.stringify(jsonMessage),
// )}`

// let fetchSpy = vi.spyOn(window, 'fetch') as SpyInstance<any>
// let onFetchErrorSpy = vi.fn()
// let onFetchResponseSpy = vi.fn()
// let onFetchFinallySpy = vi.fn()

// describe('describe useFetch', () => {
//   //   afterEach(() => {
//   //     vi.restoreAllMocks()
//   //   })

//   beforeEach(() => {
//     fetchSpy = vi.spyOn(window, 'fetch')
//     onFetchErrorSpy = vi.fn()
//     onFetchResponseSpy = vi.fn()
//     onFetchFinallySpy = vi.fn()
//   })

//   it('should have status code of 200 and message of Hello World', async () => {
//     const { statusCode, data } = useFetch('https://example.com?text=hello')

//     await nextTick()

//     expect(fetchSpy).toHaveBeenCalledOnce()
//     expect(data.value).toBe('hello')
//     expect(statusCode.value).toBe(200)
//   })

//   //   it('returns the right data', async () => {
//   //     const { statusCode, data } = mockUseFetch(
//   //       'https://example.com/api/characters',
//   //     )

//   //     expect(mockUseFetch).toHaveBeenCalledOnce()
//   //   })
// })
