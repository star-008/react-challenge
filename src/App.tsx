import './App.css'

import Amplify from 'aws-amplify'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import awsconfigdev from './aws-exports-dev'
import logo from './logo.svg'
import { createStoreWithMiddleware } from './redux/CreateStore'
import { IAppScenario } from './redux/IAppScenario'
import { IAppServices } from './redux/IAppServices'

Amplify.configure(awsconfigdev)

function createDependencies(appScenario: IAppScenario): IAppServices {
  switch (appScenario.type) {
    case 'mock':
      return {
        // MARKER_MOCK_SERVICES
      }
    case 'real':
      return {
        // MARKER_REAL_SERVICES
      }
  }
}

interface AppProps {
  scenario?: IAppScenario
}

function App(props: AppProps) {
  const store = createStoreWithMiddleware(createDependencies(props.scenario || { type: 'real' }))
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  Learn React
                </a>
              </header>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
