import React from 'react'
import cl from "../../styles/Footer.module.scss";
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import LOGO from "../../styles/img/logo.svg";

const Footer = () => {
    return (
      <footer className={cl.footer}>
          <div className={cl.logo}>
              <Link to={ROUTES.HOME}>
                  <img src={LOGO} alt="stuff" />
              </Link>
          </div>
          <div className={cl.create}>Developed by <span className={cl.create_name}>Davedov</span></div>
          <ul className={cl.socials}>
              <li className={cl.item}>
                  <a href="https://www.youtube.com" rel="noreferrer" target='_blank'>
                      <svg className={cl.icon}>
                          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#yt`}></use>
                      </svg>
                  </a>
              </li>
              <li className={cl.item}>
                  <a href="https://www.youtube.com" rel="noreferrer" target='_blank'>
                      <svg className={cl.icon}>
                          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#fb`}></use>
                      </svg>
                  </a>
              </li>
              <li className={cl.item}>
                  <a href="https://www.youtube.com" rel="noreferrer" target='_blank'>
                      <svg className={cl.icon}>
                          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#inst`}></use>
                      </svg>
                  </a>
              </li>
          </ul>
      </footer>
    )
}
export default Footer;
