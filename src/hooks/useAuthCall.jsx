import axios from "axios";
import {
    fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess
} from "../features/authSlice"
import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom";

const useAuthCall = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const baseURL = "http://32241.fullstack.clarusway.com/"


    //login---------
    const login = async (userInfo)=>{
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(
                `${baseURL}users/auth/login/`,userInfo
            )
            dispatch(loginSuccess(data))
            toastSuccessNotify("Login performed")
            navigate(-1)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Login can nor be performed!")
        }
    }

    //logout
    const logout = async ()=>{
        dispatch(fetchStart())
        try {
            await axios.post(
                `${baseURL}users/auth/logout/`
            )
            dispatch(logoutSuccess())
            toastSuccessNotify("Logout performed")
            navigate("/")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Logout can not be performed")
        }
    }

    //register
    const register = async (userInfo)=>{
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(
                `${baseURL}users/register`,userInfo
            )
            dispatch(registerSuccess(data))
            toastSuccessNotify("Register performed")
            navigate("-1")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Register can not be performed")
        }
    }

    return {login, logout, register}

}
export default useAuthCall