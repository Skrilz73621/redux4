import { types } from "./types"

export function asyncFunctionAction() {
    return function () {
        setTimeout(() => {
            alert('hello')
        }, 2000)
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

export function getUsersAction(users) {
    return {
        type: types.USERS,
        payload: users
    }
}

export function fetchQuoteAction() {
    return async function (dispatch) {
        dispatch({ type: 'FETCH_QUOTE_REQUEST' })

        try {
            const response = await fetch('https://api.quotable.io/random')
            const data = await response.json()
            console.log(data);
            dispatch({
                type: 'FETCH_QUOTE_SUCCESS',
                payload: {
                    quote: data.content,
                    author: data.author
                }
            })

        } catch (error) {
            dispatch({
                type: 'FETCH_QUOTE_FAILED',
                payload: 'Failed to fetch quote'
            })

        }
    }
}