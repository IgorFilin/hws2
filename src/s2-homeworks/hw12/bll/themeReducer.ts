const initState:initStateType = {
    themeId: 1,
}

type initStateType = {
    themeId:number
}
type changeThemeIdType = ReturnType<typeof changeThemeId>
type AllActionsType = changeThemeIdType


export const themeReducer = (state:initStateType = initState, action: AllActionsType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":{
            return {...state,themeId:action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
