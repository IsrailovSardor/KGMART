const inistialState = {
    book: []
}
export const productsReducer = (state = inistialState, action) => {

    switch (action.type) {
        // BEST
        case "ALL_BOOK":
            return {
                ...state,
                book: action.data
            }
        default: return state
    }
}