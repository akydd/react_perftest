import React, {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './app.js'
import configureStore from './configureStore.js'

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('test')
)
