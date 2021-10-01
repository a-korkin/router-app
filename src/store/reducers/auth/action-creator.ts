import { AppDispatch } from "../../";
import { AuthActionEnum, SetIsAuthAction, SetIsLoadingAction } from "../auth";

export const AuthActionCreators = {
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: isLoading }),
    setIsAuth: (isAuth: boolean): SetIsAuthAction => ({ type: AuthActionEnum.SET_IS_AUTH, payload: isAuth }),
    login: () => (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            dispatch(AuthActionCreators.setIsAuth(true));
        } catch (e) {
            console.log("Произошла ошибка");
        } finally {
            dispatch(AuthActionCreators.setIsLoading(false));
        }
    }
}
