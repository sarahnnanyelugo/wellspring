import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SchLogo from "../../assets/logo.png";
// import fIcon from "../assets/portal.svg";
import { navMenus } from "./MenuItems";
import Dropdown from "./Dropdown";

import classNamees from "./NavBar.module.css";
import "./navbar.scss";
// import classNamees from './AdmissionForm.module.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [activeMenu, setActiveMenu] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
  });

  const onMouseEnter = (e) => {
    const menuText = e.target.text.trim().toLowerCase() || "about";

    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setActiveMenu({
        menu1: menuText === "about",
        menu2: menuText === "academics",
        menu3: menuText === "admissions",
        menu4: menuText === "arts",
        menu5: menuText === "athletics",
        menu6: menuText === "giving",
      });
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setActiveMenu({
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
      });
    }
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openPortalLink = () => {
    const portal = "https://wellspring.educare.school/";
    window.open(portal);
  };
  return (
    // <div classNameName="col-md-12 flexy navContainer">
    //   <div classNameName="col-md-3">&nbsp;</div>
    //   <nav classNameName="col-md-6">
    //     <div classNameName={classNamees.navCont}>
         
    //       <div classNameName="menu-icon" onClick={handleClick}>
    //         <i classNameName={click ? "fas fa-times" : "fas fa-bars"} />
    //       </div>
    //       <ul classNameName={click ? "nav-list active" : "nav-list"}>
    //         <li
    //           classNameName="nav-item "
    //           onMouseEnter={onMouseEnter}
    //           onMouseLeave={onMouseLeave}
    //         >
    //           <NavLink
    //             to={"/about"}
    //             classNameName="nav-links"
    //             onClick={closeMobileMenu}
    //           >
    //             About
    //           </NavLink>
    //           {activeMenu.menu1 && <Dropdown menuArray={navMenus.about} />}
    //         </li>

    //         <li
    //           classNameName="nav-item "
    //           onMouseEnter={onMouseEnter}
    //           onMouseLeave={onMouseLeave}
    //         >
    //           <NavLink
    //             to={"/academics"}
    //             classNameName="nav-links"
    //             onClick={closeMobileMenu}
    //           >
    //             Academics
    //           </NavLink>
    //           {activeMenu.menu2 && <Dropdown menuArray={navMenus.academics} />}
    //         </li>

    //         <li
    //           classNameName="nav-item "
    //           onMouseEnter={onMouseEnter}
    //           onMouseLeave={onMouseLeave}
    //         >
    //           <NavLink
    //             to={"/learn"}
    //             classNameName="nav-links"
    //             onClick={closeMobileMenu}
    //           >
    //             Admissions
    //           </NavLink>
    //           {activeMenu.menu3 && <Dropdown menuArray={navMenus.admissions} />}
    //         </li>

    //         <li
    //           classNameName="nav-item "
    //           onMouseEnter={onMouseEnter}
    //           onMouseLeave={onMouseLeave}
    //         >
    //           <NavLink
    //             to={"/learn"}
    //             classNameName="nav-links"
    //             onClick={closeMobileMenu}
    //           >
    //             Arts
    //           </NavLink>
    //           {activeMenu.menu4 && <Dropdown menuArray={navMenus.arts} />}
    //         </li>
    //         <li
    //           classNameName="nav-item "
    //           onMouseEnter={onMouseEnter}
    //           onMouseLeave={onMouseLeave}
    //         >
    //           <NavLink
    //             to={"/learn"}
    //             classNameName="nav-links"
    //             onClick={closeMobileMenu}
    //           >
    //             Athletics
    //           </NavLink>
    //           {activeMenu.menu5 && <Dropdown menuArray={navMenus.athletics} />}
    //         </li>

    //         <li
    //           classNameName="nav-item "
    //           onMouseEnter={onMouseEnter}
    //           onMouseLeave={onMouseLeave}
    //         >
    //           <NavLink
    //             to={"/learn"}
    //             classNameName="nav-links"
    //             onClick={closeMobileMenu}
    //           >
    //           Giving
    //           </NavLink>
    //           {activeMenu.menu6 && <Dropdown menuArray={navMenus.giving} />}
    //         </li>
    //         <li classNameName="nav-item ">
    //           <NavLink
    //             to={"/News"}
    //             classNameName="nav-links"
    //             onClick={closeMobileMenu}
    //           >
    //             Blog
    //           </NavLink>
    //         </li>
    //         <li classNameName="nav-item ">
    //           <NavLink
    //             to={"/News"}
    //             classNameName="nav-links"
    //             onClick={closeMobileMenu}
    //           >
    //             Store
    //           </NavLink>
    //         </li>

    //         <div classNameName="wrapper">
    //           <ul classNameName="mainMenu">
    //             <li classNameName="item" id="account">
    //               <a href="#account" classNameName="btn">
    //                 About
    //               </a>
    //               <div classNameName="subMenu">
    //                 <NavLink
    //                   to={"/principal"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   Administrator's Message
    //                 </NavLink>{" "}
    //                 <NavLink
    //                   to={"/message"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   Proprietor's Message
    //                 </NavLink>
    //                 <NavLink
    //                   to={"/history"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   History
    //                 </NavLink>
    //                 <NavLink
    //                   to={"/contact"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   Contact Us
    //                 </NavLink>
    //                 <NavLink
    //                   to={"/Conduct"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   Parents Code-of-Conduct
    //                 </NavLink>
    //               </div>
    //             </li>

    //             <li classNameName="item" id="academics">
    //               <a href="#academics" className="btn">
    //                 Admission
    //               </a>
    //               <div classNameName="subMenu">
    //                 <NavLink
    //                   to={"/apply"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   How to Apply
    //                 </NavLink>{" "}
    //                 <NavLink
    //                   to={"/fees"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   School Fees
    //                 </NavLink>{" "}
    //                 <NavLink
    //                   to={"/transfer"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   Transfer
    //                 </NavLink>{" "}
    //               </div>
    //             </li>

    //             <li classNameName="item" id="admission">
    //               <a href="#admission" className="btn">
    //                 Academics
    //               </a>
    //               <div classNameName="subMenu">
    //                 <NavLink
    //                   to={"/senior"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   Creche
    //                 </NavLink>{" "}
    //                 <NavLink
    //                   to={"/junior"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   Higher Primary
    //                 </NavLink>{" "}
    //                 <NavLink
    //                   to={"/Primary"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   Junior Primary
    //                 </NavLink>{" "}
    //                 <NavLink
    //                   to={"/secondary"}
    //                   classNameName="nav-links"
    //                   onClick={closeMobileMenu}
    //                 >
    //                   Secondary
    //                 </NavLink>{" "}
    //               </div>
    //             </li>

    //             <li classNameName="item" id="support">
    //               <a href={"/school"} className="btn">
    //                 School Life
    //               </a>
    //             </li>

    //             <li classNameName="item" id="support">
    //               <a href="/Gallery" className="btn">
    //                 Gallery
    //               </a>
    //             </li>

    //             <li classNameName="item" id="support">
    //               <a href="/News" className="btn">
    //                 News & Events
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>






<div className="  fixed-top" id="navbar">

    <a className="navbar-brand" href="index.html">
        {/* <img src="Assets/img/logo.png" alt="logo"
        height="57px" style="  margin-left:60px" >
             */}
        </a>

<div id="links">
    <div className="dropdown">
        <a className="dropbtn">Solutions
          <i className="icofont-caret-down"></i>
        </a><br />

        <div className=" dropdown-content">
          <div className="row">
          <div className="col-md-12" style="display:flex">

            <div className="col-md-3" style="background-color:#e2dbf9; text-align:left; height:390px !important; border-bottom-left-radius:10px;
            ">



              <h6 style="margin-top:30px; margin-bottom:17px; "> Featured Products</h6>
              <a href="overview.html" className="hover">
               <span style="display:flex;"><h6> Overview </h6><i className="icofont-circled-right arrow" style="margin-left:160px !important; margin-top:6px"></i></span>
              <span>Overview of our solutions</span>
              </a>

              <a href="#" className="hover" >
                <span style="display:flex">
                <h6 > Communication Book</h6><i className="icofont-circled-right arrow" style="margin-left:80px !important; margin-top:6px"></i></span>
               <span >Report daily activities</span>

                </a>


              <a href="#" className="hover" >
                <span style="display:flex">
                <h6 > Accounts</h6><i className="icofont-circled-right arrow" style="margin-left:150px !important; margin-top:6px"></i></span>
             <span >Managing Finances</span>
                </a>

              <a href="#" className="hover" >
                <span style="display:flex">
               <h6> E-Learning</h6><i className="icofont-circled-right arrow" style="margin-left:130px !important; margin-top:6px"></i></span>
               <span >Learning management system</span>
                </span>

              <a href="reports.html" className="hover">
                <span style="display:flex">
                <h6 > Report</h6><i className="icofont-circled-right arrow" style="margin-left:160px !important; margin-top:6px"></i></span>
              <span >Create quality timetable</span>
                </a>




</div>

        <div className="col-md-7" style="display:flex; background-color:#FAFAFA">
<ul className="col-md-3 list-unstyled">
  <h6 style="margin-top:30px; margin-bottom:17px; text-align:left">Products</h6>

<li><a href="#">Accounts</a></li>
<li><a href="#">Timetable</a></li>
<li><a href="#">Attendance</a></li>
<li><a href="#">Audit Trail</a></li>
<li><a href="#">Communication Book</a></li>
<li><a href="#">Student Performance</a></li>
<li><a href="#">Result Broadsheet</a></li>
<li><a href="#">Teachers Rating</a></li>




</ul>


<ul className="col-md-3 list-unstyled" style="margin-top:40px;">
  <li><a href="#">Behavioral Assessments</a></li>
  <li><a href="#">Admission Form</a></li>
  <li><a href="#">Population Insight</a></li>
  <li><a href="#">Fees Payment</a></li>
  <li><a href="#">Audit Trail</a></li>
  <li><a href="#">Medical Record</a></li>
  <li><a href="#">Newsletters</a></li>
  <li><a href="#">Wallet Management</a></li>



  
  
  </ul>
  <ul className="col-md-3 list-unstyled" style="margin-top:40px;">
    <li><a href="#">Chat</a></li>
    <li><a href="#">Calender</a></li>
    <li><a href="#">Dynamic Scripts</a></li>
    <li><a href="#">News Feed</a></li>
    <li><a href="#">Human Resources</a></li>
    <li><a href="#">Library Management</a></li>
    <li><a href="#">Mobile App</a></li>



    
    </ul>

    <ul className="col-md-3 list-unstyled" style="margin-top:40px;">
      <li><a href="#">Lesson Plan</a></li>
      <li><a href="#">Computer-Based Test</a></li>
      <li><a href="#">Reports Remarks</a></li>
      <li><a href="#">Transcripting</a></li>
      <li><a href="#">Custom Gradings</a></li>
      <li><a href="#">E-Learning</a></li>

      </ul>







        </div>


<div className="col-md-2 " style="background-color:white; padding-left:60px; border-bottom-right-radius:10px;">
          <ul className="list-unstyled">
            <h6 style="margin-top:30px; margin-bottom:17px; text-align:left">Developer Tools</h6>

          <li><a href="#">Api</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Release Notes</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Support</a></li>




          </ul>
</div>

</div>
        </div>
        </div>
      </div>


<div className="dropdown">
    <a  className="dropbtn">Resources
        <i className="icofont-caret-down"></i></a>
         {/* <img src="Assets/img/drop-icon.png" height="10px" ></a>  */}
        <div className="dropdown-content" style="width: 900px !important;
        ">
          <div className="row">
            <div className="col-md-12" style="display:flex">


  <div className="col-md-3" style="background-color:#e2dbf9; text-align:left;     height:390px !important; border-bottom-left-radius:10px;">
    <h6 style="margin-top:30px; margin-bottom:17px; "> Resources</h6>

    <a  href="#" className="hover" >
      <span style="display:flex">
      <h6 > Overview</h6><i className="icofont-circled-right arrow" style="margin-left:100px !important; margin-top:12px"></i></span>
    <span style="margin-top:-5px" >Contact, Share and Learn</span>
      </a>

<a href="#" className="hover" >
  <span style="display:flex">
  <h6> Tutorials</h6><i className="icofont-circled-right arrow" style="margin-left:100px !important; margin-top:12px"></i></span>
<span >Setup and modules guides</span>

  </a>


<a href="#" className="hover" >

  <span style="display:flex">
  <h6 >Frequently Asked Questions</h6><i className="icofont-circled-right arrow" style="margin-left:30px !important; margin-top:12px"></i></span>
<span >Modules and Systems Q&A</span>
  </a>

<a href="#" className="hover">
  <span style="display:flex">
  <h6 > Tools</h6><i className="icofont-circled-right arrow" style="margin-left:120px !important; margin-top:12px"></i></span>
<span >Tools for Systems setup</span>
  </a>




</div>


  <div className="col-md-2 " style="background-color:#FAFAFA;">
    <ul className="list-unstyled">
      <h6 style="margin-top:30px !important; margin-bottom:17px; color:black; font-weight:bolder; font-size:14px; text-align:left">Get Involved</h6>

    <li><a href="#">Tutorials</a></li>
    <li><a href="#">Meetups</a></li>
    <li><a href="#">Help Center</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">FAQs</a></li>




    </ul>
</div>

<div className="col-md-7" style="display:flex; background-color:white; border-bottom-right-radius:10px;">

  <div className="row" >
    <small style="margin-top:30px; margin-left:30px; color:black; font-weight:bold">Featured Articles</small>

<div className="col-md-12" style="display:flex; padding-left:30px; margin-top:-50px">
<div  style="height:50px; width:50px !important; background-color:grey; border-radius:5px;"></div>
<p className="col-md-10">We Must Equip Teachers With The Skills And Knowledge They Need To Be Confident And Effective Users of Technology</p>
</div>

<div className="row">

  <div className="col-md-12" style="display:flex; padding-left:42px; margin-top:-60px;">
    <div>
        {/* <img src="Assets/img/comp.png" height="40px" style="border-radius:5px;"></div> */}
    <p className="col-md-10">Why Schools Should Consider Adopting A Data-Driven Culture Now More Than Ever</p>
    </div>
</div>


<div className="row">

  <div className="col-md-12" style="display:flex; padding-left:42px;  margin-top:-70px">
    <div  style="height:50px; width:50px !important; background-color:grey; border-radius:5px;"></div>
    <p className="col-md-10">Teachers Guide On How To Set CBT Questions</p>
    </div>
</div>
  </div>



          </div>

          </div>
          </div>
          </div>


</div>
<div className="dropdown">
    <a className="dropbtn">Company
      <i className="icofont-caret-down"></i></a>
      <div className="dropdown-content"   style="width: 900px !important;
      ">
          <div className="row">
            <div className="col-md-12" style="display:flex">


  <div className="col-md-3" style="background-color:#e2dbf9; text-align:left;     height:390px !important; border-bottom-left-radius:10px; ">
    <h6 style="margin-top:30px; margin-bottom:17px; "> Company</h6>

  <a href="about.html" className="hover" >
    <span style="display:flex">
    <h6 > About Us</h6><i className="icofont-circled-right arrow" style="margin-left:100px !important; margin-top:12px"></i></span>
    <span  >Contact, Share and Learn</span>
    </a>



  <a href="leadership.html" className="hover" >
<span style="display:flex">
<h6 > Leadership</h6><i className="icofont-circled-right arrow" style="margin-left:80px !important; margin-top:12px"></i></span>
<span>Setup and modules guides</span>
</a>



<a href="#" className="hover" >
  <span style="display:flex">
  <h6 >Care Team</h6><i className="icofont-circled-right arrow" style="margin-left:80px !important; margin-top:12px"></i></span>
<span >Modules and Systems Q&A</span>
  </a>

<a href="customers.html" className="hover" >
  <span style="display:flex">
  <h6 > Customers</h6><i className="icofont-circled-right arrow" style="margin-left:80px !important; margin-top:12px"></i></span>
<span>Tools for Systems setup</span>
  </a>




</div>


  <div className="col-md-3 " style="background-color:#FAFAFA; display:flex">

    <ul className="list-unstyled col-md-6">
      <h6 style="margin-top:30px !important; margin-bottom:50px; color:black; font-weight:bolder; font-size:12px; text-align:left">Get Involved</h6>

    <li><a href="about.html">About Us</a></li>
    <li><a href="leadership.html">Leadership</a></li>
    <li><a href="careers.html">Carrers</a></li>
    <li><a href="customers.html">Customers</a></li>
    <li><a href="#">Care Team</a></li>
    <li><a href="#">Investors Relations</a></li>

    </ul>

<ul className="col-md-6 list-unstyled" style="margin-top:80px">
  <li><a href="#">Security</a></li>
  <li><a href="#">Internship</a></li>
  <li><a href="contact.html">Contact Us</a></li>


</ul>
</div>

<div className="col-md-6" style="background-color:white; border-bottom-right-radius:10px;">
<div className="row">
  <div className="col-md-12">
  <div  style="margin-top:15px">
    {/* <img src="Assets/img/team.png"  height="170px" > */}
 </div>

    <div  style="margin-top:15px">
      {/* <img src="Assets/img/meeting.png"  height="170px" > */}
      </div>
</div>
</div>

          </div>

          </div>
          </div>
          </div>


    </div>
    </div>

    <a className="dropdown" className="dropbtn" href="pricing.html" style="  font-family: 'Poppins', sans-serif; font-weight:bold !important; font-size:16px; margin-left:15px;
    ">Pricing</a>
    <a className="dropdown login" href="login.html"  target="_blank">Login</a>

    </div>
  </div>


  );
}

export default NavBar;
