import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userModel, users } from "./user.model";

const getUserState = createFeatureSelector<users>('userList');
export const getUsers = createSelector(getUserState, (state)=>{
    return state
})