import { CATEGORY_DETAILS_REQUEST, CATEGORY_DETAILS_SUCCESS, CATEGORY_DETAILS_FAIL } from "../Constants/CategoryConstants";

export const categoryDetailsReducer = (state = { category: {}}, action) => {
    switch (action.type) {
        case CATEGORY_DETAILS_REQUEST:
            return { ...state, loading: true}
        case CATEGORY_DETAILS_SUCCESS:
            return { loading: false, category: action.payload }
        case CATEGORY_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }

}