import { Provider } from 'react-redux'

import store from './store'

import { Example } from './components/Example'

const App = function () {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  )
}

export default App
