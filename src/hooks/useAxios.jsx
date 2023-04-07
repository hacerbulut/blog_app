import axios from "axios"


const useAxios = ()=>{
    const token = "073bac23674e781eab51fc4f7c81f953a4bbd047"
    const axiosPublic = axios.create({
        baseURL:"http://32241.fullstack.clarusway.com/"
    })

    const axiosWithToken = axios.create({
        baseURL:"http://32241.fullstack.clarusway.com/",
        headers:{Authorization: `Token ${token}`}
    })
    return {axiosPublic, axiosWithToken}
}
export default useAxios