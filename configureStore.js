import {createStore} from 'redux'
import reducer from './reducer.js'

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducer.js', () => {
            const nextReducer = require('./reducer.js').default
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
