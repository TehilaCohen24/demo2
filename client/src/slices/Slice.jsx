import {createSlice} from "@reduxjs/toolkit"

const initVal={
    userData:[],
    todoData:[],
    postData:[]
}

const Slice=createSlice({
    name:"List",
    initialState:initVal,
    reducers:{
        updateUser:(state,action)=>{
                state.userData=action.payload.userData
        },
        updateTodo:(state,action)=>{
            state.todoData=action.payload.todoData
        },
        updatePost:(state,action)=>{
            state.postData=action.payload.postData
        },
    }
})
export const {updateUser,updateTodo,updatePost}=Slice.actions
export default Slice.reducer