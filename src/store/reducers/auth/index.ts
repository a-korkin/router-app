export interface ICommonState {
    isLoading: boolean;
    isAuth: boolean;

}

export enum AuthActionEnum {
    SET_IS_AUTH = "SET_IS_AUTH",
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_IS_AUTH;
    payload: boolean;
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type AuthAction = SetIsAuthAction | SetIsLoadingAction;

const initialState: ICommonState = {
    isLoading: false,
    isAuth: false
}

export const authReducer = (state: ICommonState = initialState, action: AuthAction): ICommonState => {
    switch (action.type) {
        case AuthActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case AuthActionEnum.SET_IS_AUTH:
            return { ...state, isAuth: action.payload };
        default:
            return state;
    }
}
