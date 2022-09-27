import React,{useEffect} from 'react'
import { RegisterAction } from '../Redux/RegisterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import Swal from 'sweetalert2'
import HeroSlider from './HeroSlider'

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.register.auth)
    const registerData = useSelector((state) => state.register.registerData);

    useEffect(()=> {
      const status= JSON.parse(localStorage.getItem('status'));
      const arr=JSON.parse(localStorage.getItem('userRegisterArray'))
      if(registerData[0] === undefined){
        dispatch(RegisterAction.createRegister(arr))
        dispatch(RegisterAction.updateAuth(status))
      } else{ 
      localStorage.setItem("userRegisterArray", JSON.stringify(registerData))
      localStorage.getItem('status', JSON.stringify(auth));
      }

    },[auth])

    const authHandler = () =>{
     dispatch(RegisterAction.updateAuth(false));
     Swal.fire({
      icon: 'success',
      title: 'You logged out successfully',
      confirmButtonText: 'OK',
      allowOutsideClick: false
    })
     navigate('/login')
    }
  return (
    <div className={styles.logoutMainDiv}>
      <HeroSlider />
      <h1>Click for Logout!</h1>
        { auth &&  
        <button onClick={authHandler} className={styles.button}>Logout</button>
        }
    </div>
  )
}

export default Logout