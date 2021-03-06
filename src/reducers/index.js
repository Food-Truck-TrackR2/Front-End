import { USER_REGISTER_START, 
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAIL, 
    OPERATOR_REGISTER_SUCCESS,
    OPERATOR_REGISTER_START,
    OPERATOR_REGISTER_FAIL,
    USER_LOGIN_START, 
    USER_LOGIN_SUCCESS,
    OPERATOR_LOGIN_START,
    OPERATOR_LOGIN_SUCCESS,
    OPERATOR_LOGIN_FAIL,
    OPERATOR_ADD_TRUCKS_SUCCESS,
    OPERATOR_ADD_TRUCKS_FAIL,
    USER_LOGIN_FAIL,
    FETCH_TRUCKS_SUCCESS,
    FETCH_TRUCKS_FAIL,
    ADD_TRUCKS_SUCCESS,
    ADD_TRUCKS_FAIL,
    YELP_FETCH_SUCCESS,
    YELP_FETCH_FAIL
} from '../actions'



export let intitialState = {
diner: {
    favoriteTrucks: []
}, 

operator: {
    trucks: []
},

foodTrucks: [],

options: [
    { key: 'd', text: 'Diner', value: 'diner' },
    { key: 'o', text: 'Operator', value: 'operator' },
  ],

isLoading: false,
error: ''
}

const persistedState = localStorage.getItem('reduxState')
if (persistedState) {
intitialState = JSON.parse(persistedState)
}

export const reducer = (state = intitialState, action) => {
switch(action.type) {
    case USER_REGISTER_START:
    case USER_LOGIN_START:
        return {
            ...state, 
            isLoading: true,
            error: ''
        }
    case USER_REGISTER_SUCCESS:
        return {
            ...state,
            diner: {
                ...action.payload,
                ...state.diner
            },
            isLoading: false,
            error: ''
        } 
    case OPERATOR_REGISTER_START:
    case OPERATOR_LOGIN_START:
        return {
            ...state,
            operator: {
                ...state.operator,
                ...action.payload,
            },
            isLoading: false,
            error: ''
        }

        case OPERATOR_REGISTER_SUCCESS:
            return {
                ...state,
                operator: {
                    ...action.payload,
                    ...state.operator
                },
                isLoading: false,
                error: ''
            } 

    case USER_LOGIN_SUCCESS:
        return {
            ...state,
            diner: {
                ...state.operator,
                ...action.payload
            },
            isLoading: false,
            error: ''
        } 
    case OPERATOR_LOGIN_SUCCESS:
        return{
            ...state,
            operator: {
                ...state.operator,
                ...action.payload
            },
            isLoading: false,
            error: ''
        }

    case USER_LOGIN_FAIL:
        return {
            ...state, 
            error: action.payload,
            isLoading: false
        }
    case OPERATOR_LOGIN_FAIL:
        return{
            ...state, 
            error: action.payload,
            isLoading: false 
        }
        
    case USER_REGISTER_FAIL:
        return{
            ...state,
            error: action.payload,
            isLoading: false
        }
    case ADD_TRUCKS_SUCCESS:
        return{
            ...state,
            success: '',
            success: action.payload
        }
    case ADD_TRUCKS_FAIL: 
        return{
            ...state,
            error: '',
            error: action.payload
        }
    case OPERATOR_ADD_TRUCKS_SUCCESS:
        return{
            ...state,
            operator: {
                ...state.operator,
                trucks: action.payload
            },
            isLoading: false,
            error: ''
        }
    case OPERATOR_ADD_TRUCKS_FAIL:
        return{
            ...state,
            operator: {
                ...state.operator,
                message: action.payload
            },
            isLoading: false,
        }
    case FETCH_TRUCKS_SUCCESS:
        return{
            ...state,
            operator: {
                ...state.operator,
                trucks: action.payload
            }
        }
    case FETCH_TRUCKS_FAIL:
        return{
            ...state,
            operator: {
                ...state.operator,
                message: action.payload
            }
        }
    case YELP_FETCH_SUCCESS:
        return{
            ...state,
            foodTrucks: [...action.payload]
        }
    case YELP_FETCH_FAIL:
        return{
            ...state
        }
    default: 
        return state
}
}