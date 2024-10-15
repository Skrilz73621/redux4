import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersAction, getUsersAction } from '../../redux/actions'
import usersReducer from '../../redux/reducers/usersReducer'
import UserCard from '../../components/UserCard'

export default function UserPage() {

    const users = useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch()

    const getUsers = () =>{
        dispatch(fetchUsersAction())
    }

    useEffect(() => {
        getUsers()
    },[])

  return (
    <div>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', gap:'20px', marginTop:'20px'}}>{users.map(item => <UserCard userInfo={item}/>)}</div>

    </div>
  )
}
