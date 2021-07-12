import React, { useState, useCallback, useRef, useEffect } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import { useTransition, animated } from '@react-spring/web';

import styles from './styles.module.css';

const testimonialData = [

    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]


const Testimonials = () => {

    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 60, innerHeight: 60 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#28b4d7' },
    })

    const reset = useCallback(() => {
        ref.current.forEach(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['Testimonials', 'What Our Patient', 'Says']), 2000))
        ref.current.push(setTimeout(() => set(['Testimonials', 'Says']), 5000))
        ref.current.push(setTimeout(() => set(['Testimonials', 'What Our Patient', 'Says']), 8000))
    }, [])

    useEffect(() => {
        reset()
        return () => ref.current.forEach(clearTimeout)
    }, [])

    return (
        <section className="testimonials  py-5 ">
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.main}>
                        {transitions(({ innerHeight, ...rest }, item) => (
                            <animated.div className={styles.transitionsItem} style={rest} onMouseOver={reset}>
                                <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                            </animated.div>
                        ))}
                    </div>
                </div>
                <div className="card-group mt-3">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};


{/* <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>  */}


export default Testimonials;



