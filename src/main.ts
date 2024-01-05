import { createApp, h, provide } from 'vue'
import './styles/main.css'
import { DefaultApolloClient } from '@vue/apollo-composable'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import App from './App.vue'
import initializeRouter from './router'
// graphql setup

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3020/graphql',
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
