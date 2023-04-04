import axios from "axios"
import BlogCard from "../components/blog/BlogCard"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchStart, getSuccess } from "../features/blogSlice"



const Dashboard = () => {
  const dispatch = useDispatch()

  const getBlogListData = async()=>{
    dispatch(fetchStart)
    const BASE_URL="http://32241.fullstack.clarusway.com/api/blogs/"
    try {
      const {data}= await axios(`${BASE_URL}`)
      dispatch(getSuccess(data))
      console.log(data)
      
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBlogListData()
  },[])

  return (
    
      <BlogCard  />
    
  )
}

export default Dashboard
