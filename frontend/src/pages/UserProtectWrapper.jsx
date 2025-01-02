 import React,{useContext, useEffect} from 'react'
 import { UserDataContext } from '../context/UserContext'
 import { useNavigate } from 'react-router-dom'
 const UserProtectWrapper = ({
    children
 }) => {
   const token = localStorage.getItem('token');

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserDataContext)
    useEffect(()=>{
      if(!token){
        navigate('/login');
      }
    },[token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers:{
          Authorization : `Bearer ${token}`
          }
      }).then((response) => {
          if(response.status === 200){
              const data = response.data
              setUser(data.user)
              setIsLoading(false)
          }
  
      })
      .catch(err => {
          localStorage.removeItem('token')
          navigate('/login')
      })
     if(isLoading){
      return (
          <div>Loading...</div>
      )
     }

   return (
     <>
     {children}
     </>
   )
 }
 
 export default UserProtectWrapper