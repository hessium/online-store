import React from 'react';
import BANNER from '../../styles/img/banner.png';

const Poster = () => {
    return (
        <section >
            <div>BIG SALE 20%</div>
            <div >
                <div >
                    <div>the bestseller of 2022 </div>
                    <div>LENNON r2d2 with NVIDIA 5090 TI</div>
                    <button >Shop Now</button>
                </div>
                <div>
                    <img src={BANNER} alt=""/>
                </div>
            </div>
        </section>
    )
};

export default Poster;
