import Axios from 'axios'
import { useDispatch } from "react-redux"
import { updateUser,updateTodo,updatePost } from '../slices/Slice'


const useHttp=()=>{
    Axios.defaults.baseURL = 'http://localhost:3262/api/'
    const dispatch=useDispatch()

const Get = async (url) => {
    try {
        const res = await Axios.get(url)
        console.log(res.data)
        if (res.data){
            switch(url){
                case "users":
                    dispatch(updateUser({userData:res.data}))
                case "todos":
                    dispatch(updateTodo({todoData:res.data}))  
                case "posts":
                    dispatch(updatePost({postData:res.data}))  
            }
        }     
    }      
    catch {
        console.log("you are luzer!!!!!!!!!😂")
    }
}

const useAdd = async (object, url) => {
    try {
        const { data } = await Axios.post(url, object)
        Get(url)
    }
    catch {
        console.log("err")
    } 
    

}

const useDelete = async (url, object) => {
    try {
        const { data } = await Axios.delete(url, { data: { _id: object._id } })
        Get(url)
    }
    catch {
        console.log("err")
    }
    
}

const useUpdate = async ( url, object) => {
    try {
        console.log(object)
        const { data } = await Axios.put(url, object)
        Get(url)
    }
    catch {
        console.log("err")
    }
    
}

    return { useAdd, useDelete, useUpdate ,Get}
}

export default useHttp