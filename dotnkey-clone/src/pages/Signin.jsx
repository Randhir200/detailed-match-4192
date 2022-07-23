import React,{useContext, useState} from 'react'
import {AppContext} from '../context/AppContext'
const initData = {
    username:'',
    password:'',
}

export default function Signin() {
    const [formData, setFormData] = useState(initData)
    const {handleSignin} = useContext(AppContext)
     function handleChange(e){
       const {name, value} = e.target;
       setFormData({...formData, [name]:value})
     }
  return (
    <div>
        <input onChange={(e)=>handleChange(e)} value={formData.name}  type="text" name='username' placeholder="username" />
        <input type="text" name="password" onChange={(e)=>handleChange(e)} value={formData.password} placeholder="password" />
        <button onClick={()=>handleSignin(formData)}>Submit</button>
    </div>
  )
}
