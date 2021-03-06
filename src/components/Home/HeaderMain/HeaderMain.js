import React, { useState, useCallback, CSSProperties, useEffect } from 'react';
import chair from '../../../images/chair.png';
import { Link } from "react-router-dom";
import './HeaderMain.css';
import { useSpring, animated, config } from 'react-spring';
import { useTransition, AnimatedProps, useSpringRef } from '@react-spring/web';
import styles from './styles.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}><img src={chair} alt="" className="img-fluid" /></animated.div>,
]

const HeaderMain = () => {

  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#1CC7C1' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  })

  const [loading, setLoading] = useState(true)


  const [index, set] = useState(0)
  // const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
    setLoading(false);
  }, [index])

  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 3000,
        easing: 'ease',
        
    });
    setLoading(false);
},[])

  return (
    <div className="container">
      { loading ? <p>loading......</p> :
        <div className="row de-flex align-items-center headerMHeight">
        <div className="col-md-5 py-3">
          <animated.h1 style={styles}>Your New Smile <br /> Starts Here </animated.h1>
          <p className="text-secondary" data-aos='flip-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus autem explicabo nulla dolor exercitationem.</p>
          <Link to="/appointment">
            <button className="bt-brand">GET APPOINTMENT</button>
          </Link>
        </div>
        <div className={`col-md-7 flex fill ${styles.containers}`} >
          {transitions((style, i) => {
            const Page = pages[i]
            return <Page style={style} />
          })}
        </div>
      </div>
      }
    </div>
  );
};

export default HeaderMain;