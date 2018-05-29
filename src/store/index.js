import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { reducer as userReducer, userMiddleware } from './user'

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
})

const middleware = applyMiddleware(thunk, userMiddleware)


const store = createStore(rootReducer, composeWithDevTools(middleware))



export default store