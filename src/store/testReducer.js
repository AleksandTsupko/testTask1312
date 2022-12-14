import { testTypes } from "./types"

const initialState = {
    user: {},
    error: false,
    isLoading: false,
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}