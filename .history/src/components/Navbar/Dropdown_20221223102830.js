import React, {useState} from 'react';
import './dropdown.scss';
import {Link} from 'react-router-dom';

function Dropdown(props) {
    const [click, setClick] = useState(true);
    const {menuArray} = props;

    const handleClick = () => setClick(!click);

    return (
        <>
        <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<span onclick="openNav()">open</span>

<div id="main">
  ...
</div>
        </>
    );
}

export default Dropdown;
