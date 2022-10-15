
export type initStateType = {
    isLoading:boolean
}
export type AllActionsType = loadingACType
type loadingACType = ReturnType<typeof loadingAC>


const initState:initStateType = {
    isLoading: false,
}

export const loadingReducer = (state:initStateType = initState, action: AllActionsType): initStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":{
            return {...state,isLoading:action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
