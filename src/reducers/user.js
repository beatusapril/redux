import {EDIT_USER, GET_USER} from '../constants/ActionTypes'

const initialState = {
  user: {
    name: 'GRIGORIY'
  }
}

function edit(state, action) {
    if (typeof state === 'undefined') {
      return initialState
    }

    switch (action.type){
        case EDIT_USER:
          console.log("edit");
            return {user: action.user}
        case GET_USER:
            return Object.assign({}, state)
            default:
                return state;
    }
  
    // Пока не обрабатываем никаких экшенов
    // и просто возвращаем состояние, которое приняли в качестве параметра
    return state
  }

  export default edit;