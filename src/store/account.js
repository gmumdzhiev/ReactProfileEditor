const initialState = {
  firstName: 'Georgi',
  lastName: 'Mumdzhiev',
  userName: 'pandamastr',
  password: '123456',
  age: '27',
  sex: 'male',
  employed: false,
  bio: 'Some small description'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD':
      return {
        data: action.data
      }
    default:
      return state
  }
}

export const load = data => ({ type: 'LOAD', data })

export default reducer
