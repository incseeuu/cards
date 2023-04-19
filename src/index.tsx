import React from 'react'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App'
import './index.css'
import { store } from './common/store/store'
import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

reportWebVitals()
