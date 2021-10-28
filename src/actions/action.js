import * as types from '../constants/ActionTypes'

export var getUser = function (user) {
    return {
      type: types.GET_USER,
      user
    }
  };

export var editUser = function (user) {
    return {
      type: types.EDIT_USER,
      user
    }
  };

