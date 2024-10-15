import React from 'react'

export default function UserCard({userInfo}) {
  return (
    <div style={{width:'250px', height:'350px', padding:'20px', boxShadow:'1px 1px 5px black'}}>
        <img style={{maxWidth:'150px', borderRadius:'10px'}} src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728460800&semt=ais_hybrid" alt="" />
        <h1>{userInfo.name}</h1>
        <p>{userInfo.username}</p>
        <p>{userInfo.phone}</p>
    </div>
  )
}
