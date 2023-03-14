import React from 'react'
import { Link } from "react-router-dom";

import LogoutButton from "../Auth/logOutBtn";

//import "../Style/router.less";

import "../Style/router.css"

import HomeIcon from "@mui/icons-material/Home";
import SubjectIcon from '@mui/icons-material/Subject';
import ArticleIcon from '@mui/icons-material/Article';

export const PageContainer = () => {
  return (
    <div className='page-container'>
        <ul className='list-container'>
         <li>
            <Link className="Links" to="/">
              <HomeIcon fontSize="large" className="icons" />
              <div className="section-name">Home</div>
            </Link>
          </li>
          <li>
            <Link className="Links" to="/subjects">
              <SubjectIcon fontSize="large" className="icons" />
              <div className="section-name">Subjects</div>
            </Link>
          </li>
          <li>
            <Link className="Links" to="/subjects">
              <ArticleIcon fontSize="large" className="icons" />
              <div className="section-name">Article</div>
            </Link>
          </li>
          <li>
            <LogoutButton/>
          </li>
          </ul>
    </div>
  )
}
