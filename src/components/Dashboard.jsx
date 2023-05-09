import React from 'react'
import logo from '../assets/logo.jpg'
import Chartpie from './Chartpie'
import Chartline from './Chartline'
export default function Dashboard() {

  return <>
    <div className="container bg-light  p-0 mt-4 border border-dark border-1 shadow rounded-3">
            <div className="row dashtop  mx-0 p-3">
            <div className="col-md-2 px-4 py-1 d-flex fa-fade justify-content-between ">
                <span className="rounded-circle border fa-bounce border-dark "></span>
                <span className="rounded-circle border   border-dark "></span>
                <span className="rounded-circle border   border-dark "></span></div>
            <div className="col-md-10 ">    
                <input className="form-control border-dark py-1 w-75 mx-auto" type="text"/></div>
            </div>
        <div className="main py-0 border border-1 rounded-3 border-dark">
            <div className="main-header py-0 mb-0 mx-0 row">
            <div className="col-md-3 menubtns mt-4 py-0 ">
            <div className="w-25 border mainColor py-1 border-2  mb-1 m-auto mt-2 rounded-1" ></div>
            <div className="w-25 border mainColor py-1 border-2 mb-1 m-auto rounded-1" ></div>
            <div className="w-25 border mainColor py-1 border-2 m-auto  rounded-1" ></div>
        </div>
        <div className="col-md-9 user py-0  d-flex justify-content-between">
            <div className="logo py-0">
                <img className="w-100" src={logo} alt=""/>
            </div>
            <div className="userProfile   d-flex text-center"/>
                <div className="userinfo mt-2">
                <h1 className="h6 fw-bolder">Mahmoud Ibrahim</h1>
                <h1 className="h6">Admin Head</h1>
                </div>
               <div className="userphoto  m-2 "> 
                <i className="fa-regular fa-circle-user fa-2x mainColor mt-3"></i></div>
            </div>
            </div>
            </div>
            <div className="row mx-0">
            <div className="col-md-3  menubody vh-100 bg-black ">
                <ul className="mt-2 mx-0 ">
                    <li  > <i className="fas fa-home mb-2" ></i> Home(preview)</li>
                    <li  > <i className="fas fa-star" ></i> Favorites <i className="fa-solid fa-angle-right "></i>  </li>
                    <li  ><i className="fa-regular fa-clock"></i>  Recent <i className="fa-solid fa-angle-right"></i></li>
                    <li  ><i className="fa-solid fa-grip"></i>   Apps</li>
                    <li  ><i className="fa-solid fa-users"></i>   Shared with me</li>
                    <li  ><i className="fa-regular fa-clipboard"></i>Workspaces  <i className="fa-solid fa-angle-right"></i></li>
                    <li  > <i className="fa-regular fa-circle-user"></i>  My wordspace  <i className="fa-solid fa-angle-right"></i></li>
                </ul>
            </div>
            <div className="col-md-9 dashbody ">
        <div className="row d-flex justify-content-between mt-2 mx-0">
            <button className=" col-md-4 input-group form-control w-25 mt-2 mainColor"> <i className="fas fa-magnifying-glass"></i>
        </button>
          <h6 className="col-md-3 mt-2 fw-bolder">NOTIFICATIONS <i className="fa-sharp fa-solid fa-bell mainColor"></i></h6>
          <h6 className="col-md-3 mt-2 fw-bolder">MESSAGES <i className="fa-solid fa-envelope mainColor"></i></h6>
          <button className=" col-md-2 btn btn-sm btn-main  text-white fw-bolder  mainColor">LOG OUT</button>
        </div>
        <div className="row gx-1 mt-4">
            <div className="col-md-3">
                <div className="item py-0 m-0 d-flex justify-content-between bg-light border border-1 border-dark-subtle">
                <div className="bodyitem">
                <h4>PRECENT LEAD</h4>
                <h5>450</h5>
                <h5>-5.78%</h5>
                <h6>since last month</h6>
                </div>
                 <div className="icon mt-5">
                    <i className="fa-regular fa-paper-plane fa-2x "></i>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="item mx-0 py-0 d-flex justify-content-between bg-light border border-1 border-dark-subtle">
                     <div className="bodyitem">
                <h4>DEALS</h4>
                <h5>15.556</h5>
                <h5>+8.75%</h5>
                <h6>since last month</h6>
                </div>
                 <div className="icon mt-5">
                    <i className="fa-solid fa-cart-shopping fa-2x"></i>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="item mx-0 py-0 d-flex justify-content-between bg-light border border-1 border-dark-subtle">
                     <div className="bodyitem">
                <h4>REVENUS</h4>
                <h5>$74.897</h5>
                <h5>+29.88%</h5>
                <h6>since last month</h6>
                </div>
                 <div className="icon mt-5">
                    <i className="fa-regular fa-credit-card fa-2x"></i>        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="item mx-0 py-0 d-flex justify-content-between bg-light border border-1 border-dark-subtle">
                     <div className="bodyitem">
                <h4>CAMPAIGNS</h4>
                <h5>255</h5>
                <h5>+9.98%</h5>
                <h6>since last month</h6>
                </div>
                 <div className="icon mt-5">
                    <i className="fa-regular fa-message fa-2x"></i>        </div>
                </div>
            </div>
        </div>
        <div className="row gx-2 enddash mt-2 mx-0 ">
        <div className="col-md-6 p-2 ">
            <div className="chartitem">
        <h4>PEVENUE GENERATED</h4>
    <Chartline/>
            </div>
        </div>
        <div className="col-md-6 ">
            <div className="chartitem">
                <h4 className="mb-2 py-3">EMAIL CAMPAIGN</h4>
                <Chartpie/>

            </div>
        </div>
        </div>
            </div>
           
        </div>
           
           
            </div>

       

      

  
  </>
}
