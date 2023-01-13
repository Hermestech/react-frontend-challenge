import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/auth-context'
import { BrowserRouter } from 'react-router-dom'
import { createClient, Provider } from 'urql'
import './index.css'

const client = createClient({
  url: 'https://rickandmortyapi.com/graphql',
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider value={client}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
