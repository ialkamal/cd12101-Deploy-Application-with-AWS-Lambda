import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import './index.css'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: `http://ismail-udacity/`,
      scope: 'read:todo write:todo delete:todo openid profile email'
    }}
  >
    <App />
  </Auth0Provider>
)
