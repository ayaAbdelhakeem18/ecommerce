import React, { createContext,useContext,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import content from '../content';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Cart from '../pages/cart';
import { useCart } from 'react-use-cart';
import {Context} from '../App';


export const MyContext = createContext();

function NaV(props) {
  const navigate=useNavigate();
  const { loggedin } = useContext(Context);
  const [contextValue, setContextValue] = useState(false);
  const [open,setopen]=useState(false);

  const handleOpenCart = () => {
    setContextValue(true)
  };
  const handleopenNav = () => {
    setopen(true);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 1023 });
  const {
    totalItems,
  } = useCart();
  
  const logout=()=>{
  props.logged(false);
  props.userInfo({
    name: '',
    email: '',
  });
  localStorage.removeItem('loggedin');
  localStorage.removeItem('user');
  navigate('/');
  }
  return (

      <MyContext.Provider value={{contextValue,setContextValue}}>
    {isSmallScreen? (
                <nav className="navbar navbar-expand-lg bg-light text-dark navbar-light">
                {/* First group */}
                {loggedin?
                <div className="navbar-nav mr-auto flex-nowrap flex-row position-relative justify-content-between " >
                <div class="dropdown nav-link ">
                <span className="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa  fa-user large-font" style={{color:"black"}}/></span>
                <div className='dropdown-menu' aria-labelledby="dropdownMenuButton" style={{minWidth:"40px",textAlign:"center",position:"absolute"}}>
                <a class="dropdown-item" href="#" onClick={()=>logout()}>Logout</a>
                </div>
                </div>
                <NavLink className="nav-link large-font" to="/" onClick={handleOpenCart}><i className="fa fa-thin fa-cart-shopping cart-link">{totalItems}</i></NavLink>
                </div>
                :
                <div className="navbar-nav mr-auto flex-nowrap flex-row position-relative justify-content-between ">
                  <Link className="nav-link button main-button signup" to={'/signup'}>Sign Up</Link>
                  <Link className="nav-link login" to={'/login'}>LogIN</Link>
                </div>
                }
                {/* Second group */}
                <NavLink className="navbar-brand mx-auto" to="/" >
                  <img style={{maxHeight:"30px"}} src={content.logoDark} alt="Logo" />
                </NavLink>
      
                {/* Third group */}
                <div className="navbar-nav flex-nowrap flex-row align-items-center third-groub">
                {!loggedin? <NavLink className="nav-link" to="/cart" onClick={handleOpenCart}><i className="fa fa-thin fa-cart-shopping cart-link">{totalItems}</i></NavLink>:""}
                  <i className="fa fa-bars larger-font" onClick={handleopenNav}></i>
                  {/* <i className="fa fa-thin fa-search"></i> */}
                </div>
      
                <div className='overlay' style={open?{display:"block"}:{display:"none"}}>
      
                <div className='nav-links position-absolute'>
                <div className='d-flex justify-content-right align-items-center'>
                <i class="fa fa-solid fa-xmark" onClick={()=>{setopen(false)}}></i>
                </div> 
                <ul className="d-flex flex-column justify-content-center align-items-center">
                {content.navPages.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink className="nav-link" to={`/${item.toLowerCase()==="home"?"":item.toLowerCase()}`}>
                      <span>{item}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
                </div>
                </div>
              </nav>
      ):    
      <nav className="navbar navbar-expand-lg big-sc">
      <div className="container-fluid d-flex justify-content-between">
        <div className="navbar-brand">
         <NavLink to={"/"}> <img src={content.logo} alt="Logo" /></NavLink>
        </div>
        <ul className="navbar-nav d-flex justify-content-between flex-nowrap">
          {content.navPages.map((item, index) => (
            <li className="nav-item" key={index}>
              <NavLink className="nav-link" to={`/${item.toLowerCase()==="home"?"":item.toLowerCase()}`}>
                <span>{item}</span>
                </NavLink>
            </li>
          ))}
        </ul>
        {loggedin?
                <div className="icons navbar-nav d-flex justify-content-between flex-nowrap">
                {/* <span className="icon"><i className="fa  fa-search" /></span> */}

                <div class="dropdown icon ">
                <span className="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa  fa-user" /></span>
                <div className='dropdown-menu' aria-labelledby="dropdownMenuButton" style={{minWidth:"40px",textAlign:"center"}}>
                <a class="dropdown-item" href="#" onClick={()=>logout()}>Logout</a>
                </div>
                </div>

                <Link className="icon" to={"/cart"} style={{textDecoration:"none"}}><span><i className="fa fa-thin fa-cart-shopping" />{totalItems}</span></Link>
              </div>
        :
        <div className="icons navbar-nav d-flex justify-content-between flex-nowrap">
        <Link className="icon signup sec-button" to={'/signup'}>Sign Up</Link>
        <Link className="icon" to={'/login'}>LogIN</Link>
        <Link className="icon" to={"/cart"} style={{textDecoration:"none",paddingLeft:"0"}}><span><i className="fa fa-thin fa-cart-shopping" />{totalItems}</span></Link>
      </div>
        }
      </div>
    </nav>}
    </MyContext.Provider>
  );
}
export default NaV;