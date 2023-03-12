import React from 'react'
import { Link } from "react-router-dom";

import LogoutButton from "../Auth/logOutBtn";

import "../Style/router.less";

import HomeIcon from "@mui/icons-material/Home";

export const PageContainer = () => {
  return (
    <div className='page-container'>
        <ul>
         <li>
            <Link className="Links" to="/">
              <HomeIcon fontSize="large" className="icons" />
              <div className="section-name">Home</div>
            </Link>
          </li>
          <li>
            <Link className="Links" to="/subjects">
              <HomeIcon fontSize="large" className="icons" />
              <div className="section-name">Subjects</div>
            </Link>
          </li>
          <li>
            <LogoutButton/>
          </li>
          </ul>
    </div>
  )
}
