import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {MdDeleteForever} from "react-icons/all.js"
import { removeUser } from '../Store/Slices/Userslice'
const DisplayUser = () => {
const data = useSelector((state)=>{
    return state.name ;
})
console.log(data);
const dispatch = useDispatch()
const DeleteUser = (id) =>{
dispatch(removeUser(id))
}

  return (
    <>
    { 
        data.map((user,id)=>{
            return <li key={id}>
                {user}
                <button className='btn btn-delete' onClick={()=>DeleteUser(id)}>
                <MdDeleteForever className="delete-icon"/>
                </button>

            </li>
        })
    }
    </>
  )
}

export default DisplayUser

