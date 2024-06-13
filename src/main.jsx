import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Theme accentColor="purple" grayColor="olive" radius="small">
    <App />
  </Theme>
)
