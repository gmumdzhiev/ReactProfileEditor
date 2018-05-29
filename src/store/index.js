import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  form: formReducer,
})

const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, composeWithDevTools(middleware))

export default store
