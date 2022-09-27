import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterAction } from '../Redux/RegisterSlice'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import HeroSlider from './HeroSlider'
import BootstrapTable from 'react-bootstrap-table-next';




const UserList = () => {
    const registerData = useSelector((state) => state.register.registerData)
    const auth = useSelector((state) => state.register.auth);
    const dispatch = useDispatch();
   

  useEffect(()=> {
        const status= JSON.parse(localStorage.getItem('status'));
        const arr=JSON.parse(localStorage.getItem('userRegisterArray'))
        if(registerData[0] === undefined){
          dispatch(RegisterAction.createRegister(arr));
          dispatch(RegisterAction.updateAuth(status));
        } else{ 
        localStorage.setItem("userRegisterArray", JSON.stringify(registerData));
        localStorage.setItem("status",auth)
        }
      },[registerData])


      if(!auth){
        return <div className={styles.userListLoginReport}>
          <HeroSlider />
              <h1>Click here for login!</h1>
             <Link to='/login'>Please login frist!</Link>
        </div>
    } 
    const columns = [{
      dataField: 'id',
      text: 'User ID'
    }, {
      dataField: 'Name',
      text: 'User Name'
    }, {
      dataField: 'Phone',
      text: 'User Phone Number'
    },
    {
      dataField: 'Email',
      text: 'User Email Address'
    }, {
      dataField: 'Address',
      text: 'User Address'
    }
  
  ];
    
    return (
    <div className={styles.userListMainDiv}>
      <HeroSlider />
      <h1>User List</h1>
      <div className={styles.userListSubDiv}>
      <BootstrapTable keyField='id' data={ registerData } columns={ columns } />

      
      </div>
       
    </div>
  )
}

export default UserList