import { createApp, h, provide } from 'vue'
import './styles/main.css'
import { DefaultApolloClient } from '@vue/apollo-composable'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client/core'
import App from './App.vue'
import initializeRouter from './router'

// graphql setup
const httpLink = createHttpLink({
  uri: 'https://metaphysics-production.artsy.net/v2',
})

const cache = new InMemoryCache()

// create apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

initializeRouter(app)

app.mount('#app')
