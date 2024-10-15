import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuoteAction } from '../../redux/actions'
import Loading from '../../components/Loading'

export default function Quote() {

    const {quote, author, loading, error} = useSelector(state => state.quoteReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchQuoteAction())
    }, [dispatch])  


    function refreshQuote(){
        dispatch(fetchQuoteAction())
    }


  return (
    <div>
        {loading && <Loading/>}
        {error && <p>{error}</p>}
        {!loading && !error && (
            <div>
                <p>{quote}</p>
                <p><i>-{author}</i></p>
                <button onClick={refreshQuote}>get another quote</button>
            </div>
        )}
    </div>
  )
}
