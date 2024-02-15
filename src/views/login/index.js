import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginKey, setLoginKey] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    localStorage.setItem('key', loginKey);
    navigate('/profile');
  }
  // document.addEventListener('visibilitychange', () => {
  //   console.log('Current State: ', document.visibilityState)
  //   if (localStorage.getItem('key') === null) {
  //     navigate('/login')
  //   };
  // })
  return (
    <>
      <div>Login</div>
      <input type="text" name="fname" onChange={(e) => setLoginKey(e.target.value)} /> <br />
      <button onClick={(e) => handleSubmit(e)}>submit</button>
    </>
  )
}

export default Login;