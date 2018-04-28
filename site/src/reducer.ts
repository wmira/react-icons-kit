
// import { Reducer } from 'redux'
// import { IAppState } from './state'

// import {     
//     ActionTypeEnum,
// } from './actionTypeEnum'

// import { ActionTypes, InitAction, LoadIconSetAction, LoadStatusEnum } from './actionTypes'


// export const reducer: Reducer = (state: IAppState, action: ActionTypes ): IAppState => {

//     const { type } = action

//     switch ( type ) {
//         case ActionTypeEnum.INIT:
//             return initState(state, action as InitAction)
//         case ActionTypeEnum.SET_ICON_SET:
//             return loadIconSet(state, action as LoadIconSetAction<any>)
//         default:
//             return state
//     }
// }

// export const initState = (state: IAppState, action: InitAction): IAppState => {

//     return state
// }

// export const loadIconSet = (state: IAppState, action: LoadIconSetAction<any> ): IAppState => {
    
//     const { payload } = action
    
//     return { ..}
// }