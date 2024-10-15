import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncFunctionAction } from '../../redux/actions'

export default function MainPage() {

    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(asyncFunctionAction())}>adilet tupoi loh</button>
    </div>
  )
}
