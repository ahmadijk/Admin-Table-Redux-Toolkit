import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteallUser } from '../Store/Slices/Userslice'

const DeleteAllUser = () => {
const dispatch = useDispatch ()
const deleteUser=()=>{
dispatch(deleteallUser())
}
  return (  
    <button onClick={()=>deleteUser()}>DeleteAllUser</button>
  )
  
}



export default DeleteAllUser ;