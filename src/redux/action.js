import axios from "axios"
// BESTSELLER
export function getBook () {
    return async (dispatch) => {
        const { data } = await axios(`http://localhost:3000/book`)
        dispatch({
            type: "ALL_BOOK",
            data
        })
    }
}