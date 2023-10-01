import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const navigate = useNavigate();
  const [user,setUser]=useState();
  const [logged, setlogged] = useState();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setUser({email:formData.email,password:formData.password});
    props.logged(true);
    props.userInfo({email:formData.email,password:formData.password})
    setlogged(true);

    localStorage.setItem('loggedin', JSON.stringify(true));
    localStorage.setItem('user', JSON.stringify({email:formData.email,password:formData.password}));


    // setError(null);
    // axios.post('http://admindashboard.byethost10.com/api/login', formData)
    //   .then((response) => {
    //     console.log('Login successful:', response.data.user);

    //     setUser(response.data.user);
    //     props.logged(true);
    //     props.userInfo({
    //       name:response.data.user.name,
    //       email:response.data.user.email,
    //     })
    //     setlogged(true);

    //     localStorage.setItem('loggedin', JSON.stringify(true));
    //     localStorage.setItem('user', JSON.stringify(response.data.user));
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       setError(error.response.data.message);
    //     } else {
    //       console.log(error)
    //       setError('An error occurred. Please try again later.');
    //     }
    //   });
  };
  const checkLocalStorage = () => {
    const savedLoggedin = localStorage.getItem('loggedin');
    const savedUser = localStorage.getItem('user');
    if (savedLoggedin !== null && savedUser !== null) {
      setlogged(JSON.parse(savedLoggedin));
      setUser(JSON.parse(savedUser));
    }
  };

  useEffect(() => {
    checkLocalStorage();},[]);
  return (
    <>
    {logged?
      <div className='text-center d-flex flex-column jusify-content-center' style={{height:"40vh"}}>
        <p className='alert alert-primary '>Welcome back {user.name} ! You are now logged in.</p>
        <button className='button main-button' onClick={()=>navigate(-1)}>Continue Browsing</button>
      </div>
      :
    <div className="info-form ele-center text-center" style={{ maxWidth: "60%" }}>
      <div className="container mt-5 mb-5 ">
        <h1 className='heading'>Login to your account</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group form-row">
            <label htmlFor="email"><b>Email</b></label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group form-row">
            <label htmlFor="password"><b>Password</b></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <p><span className="psw">Forgot <a href="#">password?</a></span></p>

          <p><label><input type="checkbox" checked="checked" name="remember" /> Remember me </label></p>
          {error && <div className="alert" style={{color:'red'}}>{error}</div>}

          <button type="submit" className="btn btn-primary form-row">Login</button>
        </form>

      </div>
    </div>
    }
    </>
    
  )
}

export default Login;

