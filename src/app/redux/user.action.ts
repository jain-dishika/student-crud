import { createAction, props } from "@ngrx/store";
import { userModel, users } from "./user.model";

export const LOAD_USER ='[user page] load page';
export const loadUser = createAction(LOAD_USER);
export const getUsers = createAction('GET_DATA', props<{userList : userModel[]}>());
export const postUser = createAction("post user", props<{userInput : userModel}>());
export const deleteUser = createAction("delete user");
export const updateUser = createAction("update user");