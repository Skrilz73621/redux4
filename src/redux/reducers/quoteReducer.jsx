import React from 'react'
import { types } from '../types'

const initialState = {
    quote: '',
    author: '',
    loading: false,
    error: null
}

export default function quoteReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_QUOTE_REQUEST':
            return { ...state, loading: true, error: null }
        case "FETCH_QUOTE_SUCCESS":
            return {...state, loading:false, quote: action.payload.quote, author:action.payload.author}
        case "FETCH_QUOTE_FAILED":
            return {...state, loading:false, error:true}

        default: return state
    }
}
