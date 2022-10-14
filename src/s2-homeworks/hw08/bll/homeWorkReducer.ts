import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
          return  action.payload === 'up'? state.sort((a,b)=> b.age - a.age) : state.sort((a,b)=> a.age - b.age)

        }
        case 'check': {
           return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}
