import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import {store} from './redux/store.js'
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink,from} from '@apollo/client';
import { onError } from "@apollo/client/link/error";
const api = 'http://localhost:4500/graphql'
console.log('this is api ',api);
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message}) => {
        alert(`GraphQL error ${message}`);
      });
    }
    // Handle network errors if needed
    if (networkError) {
      console.error('Network  error', networkError);
    }
  });
  

const link = from([errorLink,
    new HttpLink({ uri: api })
    ])

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link:link
   
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
 <Provider store={store}>
    <App />
  </Provider> 
    </ApolloProvider>
   </React.StrictMode>
)
