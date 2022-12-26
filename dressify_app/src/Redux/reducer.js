import React from 'react'

const initstate = {
  users: [],
  mens: [],
  women: [],
  kids: [],
  loginuser:[],
  auth:false,
  lifestyle: [],
  isError: false,
  isLoading: false,
  cart:[]
}

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "DATA_REQUEST": {
      return { ...state, isLoading: true }
    }
    case "LOGIN_DATA": {
      return { ...state, users: action.payload }
    }
    case "DATA_ERROR": {
      return { ...state, isError: true, isLoading: false }
    }
    case "DATA_REQUEST_SUCCESS_MEN": {
      return { ...state, mens: action.payload }
    }
    case "DATA_REQUEST_SUCCESS_WOMEN": {
      return { ...state, women: action.payload }
    }
    case "LOGIN_USER_SAVE": {
      return { ...state, loginuser: action.payload }
    }
    case "ADD_TO_CART": {
      return { ...state, cart:[...state.cart,action.payload]}
    }
    default: {
      return state
    }
  }
}

export default reducer