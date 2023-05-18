import React, { createContext,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import content from '../content';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Cart from '../pages/cart';
import { useCart } from 'react-use-cart';


export const MyContext = createContext();

function NaV() {
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

  return (

      <MyContext.Provider value={{contextValue,setContextValue}}>

    {isSmallScreen? (
        <nav className="navbar navbar-expand-lg bg-light text-dark navbar-light">
          {/* First group */}
          <div className="navbar-nav mr-auto flex-nowrap flex-row position-relative justify-content-between " style={{left: '20px',flexBasis:"48px" }}>
            <NavLink to ="/" className="nav-link"><i className="fa fa-thin fa-user"></i></NavLink>
            <NavLink className="nav-link" to="/" onClick={handleOpenCart}><i className="fa fa-thin fa-cart-shopping cart-link">{totalItems}</i></NavLink>
          </div>

          {/* Second group */}
          <NavLink className="navbar-brand mx-auto" to="/" >
            <img style={{maxHeight:"30px"}} src={content.logoDark} alt="Logo" />
          </NavLink>

          {/* Third group */}
          <div className="navbar-nav ml-auto flex-nowrap flex-row position-relative justify-content-between" style={{right: '20px',flexBasis:"40px" }}>
            <i className="fa fa-bars" onClick={handleopenNav}></i>
            <i className="fa fa-thin fa-search"></i>
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
          <Cart />
        </nav>
      ):    
      <nav className="navbar navbar-expand-lg big-sc">
      <div className="container-fluid d-flex justify-content-between">
        <div className="navbar-brand">
          <img src={content.logo} alt="Logo" />
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
        <div className="icons navbar-nav d-flex justify-content-between flex-nowrap">

          <span className="icon"><i className="fa  fa-search" /></span>
          <span className="icon"><i className="fa  fa-user" /></span>
          <span className="icon" onClick={handleOpenCart}><i className="fa fa-thin fa-cart-shopping" />{totalItems}</span>
        </div>
      </div>
      <Cart />
    </nav>}
    </MyContext.Provider>
  );
}
export default NaV;