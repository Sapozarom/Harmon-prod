import React from 'react';
import { Outlet } from "react-router-dom";
import {useState} from 'react';
import NavBar from '../components/nav/NavBar'

/**
 * Function that handles rendering layout of the website
 * 
 * @param {number} user 
 * @returns <Layout /> coponent
 */
const Layout = ({user}) => {

  const [userId,setUserId] = useState(user);
    
  return (
    <>
        <div>
            <NavBar userData={user}/>
            <Outlet context={[userId,setUserId]} />
        </div>
    </>
  )
};

export default Layout;