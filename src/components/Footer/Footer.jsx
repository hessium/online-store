import React from 'react'
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import LOGO from "../../styles/img/logo.svg";

const Footer = () => {
    return (
      <footer>
          <div >
              <Link to={ROUTES.HOME}>
                  <img src={LOGO} alt="stuff" />
              </Link>
          </div>
          <div >Developed by <span >Davedov</span></div>
          <ul >
              <li >
                  <a href="https://www.youtube.com" rel="noreferrer" target='_blank'>
                      <svg >
                          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#yt`}></use>
                      </svg>
                  </a>
              </li>
              <li >
                  <a href="https://www.youtube.com" rel="noreferrer" target='_blank'>
                      <svg >
                          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#fb`}></use>
                      </svg>
                  </a>
              </li>
              <li >
                  <a href="https://www.youtube.com" rel="noreferrer" target='_blank'>
                      <svg >
                          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#inst`}></use>
                      </svg>
                  </a>
              </li>
          </ul>
      </footer>
    )
}
export default Footer;
