import axios from "axios"

const Data_request = () => {
    return {
        type: "DATA_REQUEST"
    }
}

const Data_failure = () => {
    return {
        type: "DATA_FAILURE"
    }
}

const Data_request_success_women = (payload) => {
    return {
        type: "DATA_REQUEST_SUCCESS_WOMEN",
        payload
    }
}

const Data_request_success_men = (payload) => {
    return {
        type: "DATA_REQUEST_SUCCESS_MEN",
        payload
    }
}

const Data_request_success_lifestyle = (payload) => {
    return {
        type: "DATA_REQUEST_SUCCESS_LIFESTYLE",
        payload
    }
}


const Data_request_success_kids = (payload) => {
    return {
        type: "DATA_REQUEST_SUCCESS_KIDS",
        payload
    }
}

const logindata = (payload) => {
    return {
        type: "LOGIN_DATA",
        payload
    }
}

export const loginuserrdx = (payload) => {
  return {
    type:"LOGIN_USER_SAVE",
    payload
  }
}

export const addtocart = (payload) => {
  return {
    type:"ADD_TO_CART",
    payload
  }
}

export const Get_Data_women = (dispatch) => {
    dispatch(Data_request)
    axios.get("http://localhost:8080/WomenProducts").then((r => dispatch(Data_request_success_women(r.data)))).catch(dispatch(Data_failure))
}
export const Get_Data_men = (dispatch) => {
    dispatch(Data_request)
    axios.get("http://localhost:8080/MensProducts").then((r)=>{
        dispatch(Data_request_success_men(r.data))
    }).catch(dispatch(Data_failure))
}

export const Get_Data_lifstyle = (dispatch) => {
    dispatch(Data_request)
    axios.get("http://localhost:8080/LifeProducts").then((r => dispatch(Data_request_success_lifestyle(r.data)))).catch(dispatch(Data_failure))
}

export const Get_Data_kids = (dispatch) => {
    dispatch(Data_request)
    axios.get("http://localhost:8080/KidsProducts").then((r => dispatch(Data_request_success_women(r.data)))).catch(dispatch(Data_failure))
}


export const GetLoginData = (dispatch) => {
    axios.get("http://localhost:8080/users").then((r) => dispatch(logindata(r.data))).catch((e) => dispatch(Data_failure))
}

export const PostData = (data) => (dispatch) => {
    axios.post("http://localhost:8080/users", data).then((r) => dispatch(Data_request_success_women(r.data))).catch((e) => dispatch(Data_failure))
}