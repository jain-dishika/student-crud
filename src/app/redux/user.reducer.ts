import { createReducer,on } from "@ngrx/store";
import { UserState } from "./user.state";
import { loadUser, postUser, getUsers } from "./user.action";

export const userReducer = createReducer(UserState,
    on(loadUser, (state) =>{
        return{
            ...state
        }
    }),
    on(getUsers, (state, action) =>{
        const userInfo = action.userList
        console.log("get dataaa",userInfo);
        return{
            ...state,
            userList : [...state.userList]
        }
    }),
    on(postUser,(state, action)=>{
        const userInfo = action.userInput
        console.log(userInfo);
        return{
            ...state,
            userList : [...state.userList, userInfo]
        }
    })   
)
