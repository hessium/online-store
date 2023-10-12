import React from 'react';
import BANNER from '../../styles/img/banner.png';
import cl from '../../styles/Home.module.scss';

const Poster = () => {
    return (
        <section className={cl.home}>
            <div className={cl.title}>BIG SALE 20%</div>
            <div className={cl.product}>
                <div className={cl.text}>
                    <div className={cl.subtitle}>the bestseller of 2022 </div>
                    <div className={cl.name}>LENNON r2d2 with NVIDIA 5090 TI</div>
                    <button className={cl.button}>Shop Now</button>
                </div>
                <div className={cl.img}>
                    <img src={BANNER} alt=""/>
                </div>
            </div>
        </section>
    )
};

export default Poster;
