import { createAction, props } from "@ngrx/store";
import { User } from "../../model/user.model";

export const login = createAction(
    "[Login Page] Login Action",
    props<{user: User}>()
);

export const logout = createAction(
    "[Login Page] Logout Action"
);