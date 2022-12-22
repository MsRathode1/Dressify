import React from 'react'

const initstate = {
  users: [],
  mens: [],
  women: [],
  kids: [],
  lifestyle: [],
  isError: false,
  isLoading: false
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
    default: {
      return state
    }
  }
}

export default reducer