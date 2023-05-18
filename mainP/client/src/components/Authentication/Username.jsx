import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../helper/validate'
// import { usernameValidate } from '../helper/validate'
// import { useAuthStore } from '../store/store'

import styles from '../../Styles/Username.module.css';

const Username = () => {

  const formik = useFormik({
    initialValues : {
      username : ''
    },
    validate : usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      // setUsername(values.username);
      // navigate('/password')
      console.log(values)
    }
  })

  return (
    <>
       <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Welcome Back</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              What do u want us to call You ?
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                  <button className={styles.btn} type='submit'>Let's Go</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
              </div>

          </form>

        </div>
      </div>
    </div>
    </>
  )
}

export default Username
