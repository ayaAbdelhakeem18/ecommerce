import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Signup(props) {
  const navigate = useNavigate();
  const [logged, setlogged] = useState();
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });
  const [message,setMessage]=useState();
  const [user,setUser]=useState();
  const [error,seterror]=useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.userInfo({
        password:registerInfo.password,
        email:registerInfo.email,
        });

            setlogged(true);
    
            localStorage.setItem('loggedin', JSON.stringify(true));

            localStorage.setItem('user', JSON.stringify({
              email:registerInfo.email,
              password:registerInfo.password,
            }))
  }
    
  //   axios.post('http://admindashboard.byethost10.com/api/register', registerInfo)
  //   .then(response => {
  //     setMessage(response.data.message);
  //     setUser(response.data.user);

  //     const loginCredentials = {
  //       email: registerInfo.email,
  //       password: registerInfo.password,
  //     };

  //     axios.post('http://admindashboard.byethost10.com/api/login', loginCredentials)
  //     .then(loginResponse => {
  //       console.log('Logged in:', loginResponse.data);
  //       props.logged(true);
  //       props.userInfo({
  //         name:response.data.user.name,
  //         email:response.data.user.email,
  //       });
  //       setlogged(true);

  //       localStorage.setItem('loggedin', JSON.stringify(true));
  //       localStorage.setItem('user', JSON.stringify(response.data.user));

  //     })
  // })
  // .catch(e => {
  //   console.log(e.response.data.errors);
  //   seterror(e.response.data.errors);
  // });

  // };

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
        <p className='alert alert-primary '>Hi {user.name} , Thanks for Registiration Your Acount was created succefully!</p>
        <button className='button main-button' onClick={()=>navigate(-1)}>Continue Browsing</button>
      </div>
      :
    <div className="text-center">
      <div className="info-form ele-center" style={{ maxWidth: "60%" }}>
        <div className="container mt-5">
          <h1 className='heading'>Create an account</h1>
          <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group form-row">
              <label htmlFor="name"><b>Name</b></label>
              <input type="text" className="form-control" placeholder="Enter your name" name="name" id="name" required onChange={handleChange} />
            </div>
            <div className="form-group form-row">
              <label htmlFor="email"><b>Email</b></label>
              <input type="email" className="form-control" placeholder="Enter Email" name="email" id="email" required onChange={handleChange} />
            </div>

            <div className="form-group form-row">
              <label htmlFor="password"><b>Password</b></label>
              <input type="password" className="form-control" placeholder="Enter Password" name="password" id="password" required onChange={handleChange} />
            </div>

            <div className="form-group form-row">
              <label htmlFor="password_confirmation"><b>Repeat Password</b></label>
              <input type="password" className="form-control" placeholder="Repeat Password" name="password_confirmation" id="passwordRepeat" required onChange={handleChange} />
            </div>

            <p className='form-row'>By creating an account, you agree to our <a href="#">Terms & Privacy</a>.</p>

            {error?Object.keys(error).length > 0 ? (
             <div className='alert' >
              <ul style={{color:"red"}}>
             {Object.keys(error).map(field => (
             error[field].map(errorMessage => (
          <li key={errorMessage}>{errorMessage}</li>
        ))
       ))}
       </ul>
       </div>
    ) : null:null}

            <button type="submit" className="btn btn-primary form-row">Register</button>
          </form>

          <div className="mt-3"></div>
        </div>
      </div>
    </div>}
    </>
  );
}

export default Signup;