import React from 'react';


import Button from "react-bootstrap/Button";
import BANNER from '../../styles/img/banner.png';
import cl from '../../styles/Poster.module.scss';

const Poster = () => {
    return (
        <section  className={cl.poster}>
            <div className={cl.headline}>BIG SALE 20%</div>
            <div className={cl.content}>
                <div className={cl.text}>
                    <div className={cl.title}>LENNON r2d2 with NVIDIA 5090 TI</div>
                    <Button variant="dark" type="submit" >Shop Now</Button>
                </div>
                <div className={cl.img}>
                    <img src={BANNER} alt=""/>
                </div>
            </div>
        </section>
    )
};

export default Poster;
