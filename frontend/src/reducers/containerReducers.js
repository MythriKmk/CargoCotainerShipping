import {    
    NEW_CONTAINER_REQUEST,
    NEW_CONTAINER_SUCCESS,
    NEW_CONTAINER_FAIL,
    NEW_CONTAINER_RESET,
    CLEAR_ERRORS
} from '../constants/containerConstants'

export const newContainerReducer = (state = { container: {} }, action) =>{
    switch (action.type) {

        case NEW_CONTAINER_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case NEW_CONTAINER_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                container: action.payload.product
            }

        case NEW_CONTAINER_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_CONTAINER_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}