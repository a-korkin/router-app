import { AppDispatch } from "..";
import { AuthActionEnum, SetIsAuthAction, SetIsLoadingAction } from "./auth-reducer";

export const AuthActionCreators = {
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: isLoading }),
    setIsAuth: (isAuth: boolean): SetIsAuthAction => ({ type: AuthActionEnum.SET_IS_AUTH, payload: isAuth }),
    login: () => (dispatch: AppDispatch) => {
        setTimeout(() => {
            dispatch(AuthActionCreators.setIsLoading(true));
            dispatch(AuthActionCreators.setIsAuth(true));
        }, 1500);
    }
}
