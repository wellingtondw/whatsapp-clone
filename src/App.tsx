import { Provider } from 'react-redux'

import store from './store'

const App = function () {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
    </Provider>
  )
}

export default App
